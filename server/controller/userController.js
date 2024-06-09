const pool = require('../config/database');
const bcrypt = require('bcrypt');

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

module.exports = { createUser }