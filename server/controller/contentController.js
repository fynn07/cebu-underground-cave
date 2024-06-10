const pool = require('../config/database');
const jwt = require('jsonwebtoken');

//req will now contain req.user which contains the ID for for the logged in user so you can query for users
const createPost = async(req, res) => {
    const { Title, Content, ImageLink, Genre} = req.body;

    const AuthorId = req.user.Id;

    try {
        const result = await pool.query(
            `INSERT INTO "Post" ("Title", "Content", "ImageLink", "Genre", "AuthorID") VALUES ($1, $2, $3, $4, $5)`,
            [Title, Content, ImageLink, Genre, AuthorId]
        );

        return res.json({message : "Post successful"});

    } catch (err) {
        return res.status(500).json({error : "Internal Server Error"}, err);
    }
}

module.exports = { createPost };