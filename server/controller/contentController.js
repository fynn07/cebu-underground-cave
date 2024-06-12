const pool = require('../config/database');
const jwt = require('jsonwebtoken');

//CREATE
//req will now contain req.user which contains the ID for for the logged in user so you can query for users
const createPost = async(req, res) => {
    const { Title, Content, ImageLink, Genre} = req.body;

    const AuthorId = req.user.Id;

    if(!Title || !Content){
        return res.status(400).json({error : "Title and Content Required"});
    }

    try {
        const result = await pool.query(
            `INSERT INTO "Post" ("Title", "Content", "ImageLink", "Genre", "AuthorID") VALUES ($1, $2, $3, $4, $5)`,
            [Title, Content, ImageLink, Genre, AuthorId]
        );

        return res.json({message : "Post successful"});

    } catch (err) {
        console.error(err);
        return res.status(500).json({error : "Internal Server Error"}, err);
    }
}

//FETCH
const getPost = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                p.*, 
                u."DisplayName", 
                u."ProfilePictureLink"
            FROM "Post" p
            JOIN "User" u ON p."AuthorID" = u."UserID"
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = { createPost, getPost };