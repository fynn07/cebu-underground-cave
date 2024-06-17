const { body, validationResult } = require('express-validator');
const pool = require('../config/database'); 
const bcrypt = require('bcrypt');

const validateSignUpRequest = [
    //prebuilt express validator methods
    body('Email').isEmail().withMessage('Invalid email address'),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('ConfirmPassword').exists().withMessage('Confirm password is required'),
    body('DisplayName').isLength({ min: 5 }).withMessage('Display name must be at least 5 characters long'),
    body('DisplayName').isLength({max : 15}).withMessage('Display name must be less than 20 characters long'),

    // Custom validation logic
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }

        const { Email, Password, ConfirmPassword, DisplayName } = req.body;

        // Custom error handling
        if (!Email || !Password || !ConfirmPassword || !DisplayName) {
            return res.status(400).json({ error: "Please provide all fields with values" });
        }

        if (Password !== ConfirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        
        try {
            const userExistsQuery = `SELECT COUNT(*) FROM "User" WHERE "Email" = $1`;
            const emailResult = await pool.query(userExistsQuery, [Email]);

            if (parseInt(emailResult.rows[0].count) > 0) {
                return res.status(400).json({ error: "Email already exists" });
            }

            const displayNameExistsQuery = `SELECT COUNT(*) FROM "User" WHERE "DisplayName" = $1`;
            const displayNameResult = await pool.query(displayNameExistsQuery, [DisplayName]); 

            if (parseInt(displayNameResult.rows[0].count) > 0) {
                return res.status(400).json({ error: "Name already exists" });
            }

            next();
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error: Validation" });
        }
    }
];

const validateLoginRequest = [
    async (req, res, next) => {
        console.log(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }
        
        const { Email, Password } = req.body;

        //custom error handling
        if(!Email || !Password){
            return res.status(401).json({ error: "Please provide all fields with values" }); 
        }

        const result = await pool.query(`SELECT "UserID", "Email", "Password" FROM "User" WHERE "Email" = $1`, [Email]);

        if(result.rows.length === 0){
            return res.status(401).json( {error : "Invalid Credentials"} );
        }

        const user = result.rows[0];

        const match = await bcrypt.compare(Password, user.Password);

        if(!match){
            return res.status(401).json( {error : "Password is incorrect"} );
        }

        next();
    }
]

module.exports = { validateSignUpRequest, validateLoginRequest };