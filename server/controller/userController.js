const pool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(req, res) => {
    const { Email, Password, DisplayName, ProfilePictureLink} = req.body;
    
    try {
        const passwordHash = await bcrypt.hash(Password, 10);

        const result = await pool.query(
            `INSERT INTO "User" ("Email", "Password", "DisplayName", "ProfilePictureLink") VALUES($1, $2, $3, $4) RETURNING *`, 
            [Email, passwordHash, DisplayName, ProfilePictureLink]
        );

        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }

}

const loginUser = async(req, res) => {
    const { Email, Password } = req.body;

    try {
        const result = await pool.query(`SELECT "UserID", "Email", "Password" FROM "User" WHERE "Email" = $1`, [Email]);

        const user = result.rows[0];

        const token = jwt.sign( {Id : user.UserID, Email : user.Email}, process.env.SECRET_KEY, {expiresIn : '1h'} );

        return res.json({email : user.Email, password : user.Password, token : token});

    } catch (err) {
        console.error("Internal Server Error", err);
        return res.status(500).json( {error: "Internal Server Error", error_message : err} );
    }
}

module.exports = { createUser, loginUser }