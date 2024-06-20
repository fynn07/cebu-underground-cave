const pool = require('../config/database');
const jwt = require('jsonwebtoken');
const { s3, bucketName, PutObjectCommand, createImageLink } = require('../S3/client');
const { randomImageName } = require('../utils/randomImageName');

//CREATE
//req will now contain req.user which contains the ID for for the logged in user so you can query for users
const createPost = async(req, res) => {
    const { Title, Content, Genre} = req.body;
    let ImageLink = null;
    const AuthorId = req.user.Id;

    if(req.file){
        const image = req.file.buffer;
        ImageLink = randomImageName();


        const putObjectParams = {
            Bucket: bucketName,
            Key: ImageLink,
            Body: image,
            ContentType: req.file.mimetype

        }

        const putCommand = new PutObjectCommand(putObjectParams);
        await s3.send(putCommand);
    }

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
        const results = await pool.query(`
            SELECT 
                p.*, 
                u."DisplayName", 
                u."ProfilePictureLink"
            FROM "Post" p
            JOIN "User" u ON p."AuthorID" = u."UserID"
        `);
        
        for(const result of results.rows){
            link = result.ProfilePictureLink;
            if(link === "Default" || !link){
                continue;
            }
            result.ProfilePictureLink = await createImageLink(link);
        }

        for(const result of results.rows){
            link = result.ImageLink;
            if(link === "null" || !link){
                continue;
            }
            result.ImageLink = await createImageLink(link);
        }

        res.json(results.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getComments = async(req, res) => {
    const { PostedFromID } = req.query;

    try {
        const results = await pool.query(`
            SELECT
                c.*,
                u."DisplayName",
                u."ProfilePictureLink"
            FROM "Comment" c
            JOIN "User" u ON c."AuthorID" = u."UserID" 
            WHERE c."PostedFromID" = $1
        `, [PostedFromID]);
        
        for(const result of results.rows){
            link = result.ProfilePictureLink;
            if(link === "Default" || !link){
                continue;
            }
            result.ProfilePictureLink = await createImageLink(link);
        }

        res.json(results.rows);

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

        profile_link = result.rows[0].ProfilePictureLink;
        image_link = result.rows[0].ImageLink;

        if (profile_link !== "Default" && profile_link) {
            result.rows[0].ProfilePictureLink = await createImageLink(profile_link);
        }

        if(image_link !== "null" && image_link) {
            result.rows[0].ImageLink = await createImageLink(image_link);
        }

        return res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllUsers = async(req, res) => {
    try {
       const results = await pool.query(`SELECT * FROM "User"`);

        for(const result of results.rows){
            link = result.ProfilePictureLink;
            if(link === "Default" || !link){
                continue;
            }
            result.ProfilePictureLink = await createImageLink(link);
        }

       return res.json(results.rows); 
    } catch (error) {
       console.error(error);
       res.status(500).json({ error : "Internal Server Error" }); 
    }
}

module.exports = { createPost, getPost, getPostByID, getComments, createComment, getAllUsers };