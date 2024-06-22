const pool = require('../config/database');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { s3, bucketName, PutObjectCommand, createImageLink } = require('../S3/client');
const { randomImageName } = require('../utils/randomImageName');
const { GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');


const createUser = async(req, res) => {
    const { Email, Password, DisplayName, ProfilePictureLink} = req.body;
    
    try {
        const passwordHash = bcryptjs.hashSync(Password, 8);

        const result = await pool.query(
            `INSERT INTO "User" ("Email", "Password", "DisplayName", "ProfilePictureLink") VALUES($1, $2, $3, $4) RETURNING *`, 
            [Email, passwordHash, DisplayName, ProfilePictureLink]
        );

        const user = result.rows[0];

        const token = jwt.sign( {Id: user.UserID, Email : user.Email}, process.env.SECRET_KEY, {expiresIn : '1h'} );

        res.cookie('token', token, {
            maxAge : 3600000,
            httpOnly: true
        })

        return res.status(200).json({message : "Signup Successful", token: token});
    } catch (err) {
        console.error("error from server");
        return res.status(500).json(err);
    }

}

const loginUser = async(req, res) => {
    const { Email } = req.body;

    try {
        const result = await pool.query(`SELECT "UserID", "Email", "Password" FROM "User" WHERE "Email" = $1`, [Email]);

        const user = result.rows[0];

        const token = jwt.sign( {Id : user.UserID, Email : user.Email }, process.env.SECRET_KEY, {expiresIn : '1h'} );
        
        res.cookie('token', token, {
            maxAge : 3600000,
            httpOnly: true
        })

        return res.status(200).json({message : "Login Successful", token : token});

    } catch (err) {
        console.error("Internal Server Error", err);
        return res.status(500).json( {error: "Internal Server Error", error_message : err} );
    }
}

const getUser = async(req, res) => {
    try {
        const id = req.user.Id;

        const result = await pool.query(`SELECT "DisplayName", "Rep", "ProfilePictureLink" FROM "User" WHERE "UserID" = $1`, [id]);

        if(result.rows[0].ProfilePictureLink == 'Default' || null){
            return res.status(200).json(result.rows[0]);
        }
        
        const link = await createImageLink(result.rows[0].ProfilePictureLink);
        
        result.rows[0].ProfilePictureLink = link;

        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Internal Server Error", err);
        return res.status(500).json( {error: "Internal Server Error", error_message : err} );
    }
}

const logoutUser = async(req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({message: "Logout Successful"});
    } catch (err) {
        console.error("Logout Unsuccessful", err);
        return res.status(500).json({error : "Logout Unsuccessful", error_message : err});
    }
}

const changeProfilePicture = async(req, res) => {
    const imageName = randomImageName();
    const image = req.file.buffer;

    const userId = req.user.Id;

    const putObjectParams = {
        Bucket: bucketName,
        Key: imageName,
        Body: image,
        ContentType: req.file.mimetype

    }

    const putCommand = new PutObjectCommand(putObjectParams);

    try {
        await s3.send(putCommand);

        await pool.query('BEGIN');

        await pool.query(
            `UPDATE "User" SET "ProfilePictureLink" = $1 WHERE "UserID" = $2`,
            [imageName, userId]
        );

        await pool.query('COMMIT');
        res.status(200).json( {message : "Successfully Changed Profile Picture"} );
        
    } catch (error) {
        console.error("Profile Picture Change Unsuccessful");
        res.status(500).json({ error : "Internal Server Error"} );
    }
}

module.exports = { createUser, loginUser, getUser, logoutUser, changeProfilePicture }