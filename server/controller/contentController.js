const pool = require('../config/database');
const jwt = require('jsonwebtoken');

//CREATE
//req will now contain req.user which contains the ID for for the logged in user so you can query for users
const createPost = async(req, res) => {
    const { Title, Content, ImageLink, Genre} = req.body;

    const AuthorId = req.user.Id;

    if(!Title){
        return res.status(400).json({error : "Title Required"});
    }

    try {
        const result = await pool.query(
            `INSERT INTO "Post" ("Title", "Content", "ImageLink", "Genre", "AuthorID") VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [Title, Content, ImageLink, Genre, AuthorId]
        );

        return res.json({message : "Post successful", id : result.rows[0].PostID});

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

const getComments = async(req, res) => {
    const { PostedFromID } = req.query;

    try {
        const result = await pool.query(`
            SELECT
                c.*,
                u."DisplayName",
                u."ProfilePictureLink"
            FROM "Comment" c
            JOIN "User" u ON c."AuthorID" = u."UserID" 
            WHERE c."PostedFromID" = $1
        `, [PostedFromID]);
        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const createComment = async (req, res) => {
    const { Content, PostedFromID } = req.body;
    const AuthorID = req.user.Id;

    if (!Content) {
        return res.status(400).json({ error: "Content Required" });
    }

    try {
        await pool.query('BEGIN');

        await pool.query(
            `INSERT INTO "Comment" ("Content", "AuthorID", "PostedFromID") VALUES ($1, $2, $3)`,
            [Content, AuthorID, PostedFromID]
        );

        await pool.query(
            `UPDATE "Post" SET "CommentCount" = "CommentCount" + 1 WHERE "PostID" = $1`,
            [PostedFromID]
        );

        await pool.query('COMMIT');

        return res.status(200).json({ message: "Comment Successful" });
    } catch (err) {
        await pool.query('ROLLBACK');
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getPostByID = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`
        SELECT 
            p.*,
            u."DisplayName",
            u."ProfilePictureLink"
        FROM "Post" p 
        JOIN "User" u ON p."AuthorID" = u."UserID"
        WHERE p."PostID" = $1
        `, [id]);

        return res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllUsers = async(req, res) => {
    try {
       const result = await pool.query(`SELECT * FROM "User"`);
       return res.json(result.rows); 
    } catch (error) {
       console.error(error);
       res.status(500).json({ error : "Internal Server Error" }); 
    }
}



module.exports = { createPost, getPost, getPostByID, getComments, createComment, getAllUsers };