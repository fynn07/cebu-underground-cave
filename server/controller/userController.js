const pool = require('../config/database');
const bcrypt = require('bcrypt');

const createUser = async(req, res) => {
    const { Email, Password, ConfirmPassword , DisplayName, ProfilePictureLink} = req.body;

    //custom error handle
    if(Password !== ConfirmPassword){
        return res.status(400).json({error : "Passwords do not Match"});
    }
    
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