const { body, validationResult } = require('express-validator');
const pool = require('../config/database'); 

const validateSignUpRequest = [
    //prebuilt express validator methods
    body('Email').isEmail().withMessage('Invalid email address'),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('ConfirmPassword').exists().withMessage('Confirm password is required'),
    body('DisplayName').isLength({ min: 5 }).withMessage('Display name must be at least 5 characters long'),

    // Custom validation logic
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()[0] });
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
            const { rows } = await pool.query(userExistsQuery, [Email]);

            if (parseInt(rows[0].count) > 0) {
                return res.status(400).json({ error: "Email already exists" });
            }

            next();
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }
];

module.exports = { validateSignUpRequest };