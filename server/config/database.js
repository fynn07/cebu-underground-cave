const dotenv = require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.NODE_ENV === "DEV" ? process.env.DB_USER : process.env.DEPLOYED_DB_USER,
    password: process.env.NODE_ENV === "DEV" ? process.env.DB_PASSWORD : process.env.DEPLOYED_DB_PASS,
    host: process.env.NODE_ENV === "DEV" ? process.env.DB_HOST : process.env.DEPLOYED_DB_HOST,
    port: process.env.NODE_ENV === "DEV" ? process.env.DB_PORT : process.env.DEPLOYED_DB_PORT,
    database: process.env.NODE_ENV === "DEV" ? process.env.DB_NAME : process.env.DEPLOYED_DB_NAME
});

const initializeDB = async () => {
    let createUserQuery = `
        CREATE TABLE IF NOT EXISTS "User" (
            "UserID" SERIAL PRIMARY KEY,
            "Email" VARCHAR(50) UNIQUE NOT NULL,
            "Password" VARCHAR(200) NOT NULL,
            "DisplayName" VARCHAR(30) UNIQUE NOT NULL,
            "ProfilePictureLink" TEXT,
            "Rep" INT DEFAULT 0
        )
    `;

    let createPostQuery = `
        CREATE TABLE IF NOT EXISTS "Post" (
            "PostID" SERIAL PRIMARY KEY,
            "Title" VARCHAR(150) NOT NULL,
            "Content" VARCHAR(300),
            "ImageLink" TEXT,
            "CreatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "Upvotes" INT DEFAULT 0,
            "Genre" VARCHAR(30) NOT NULL,
            "CommentCount" INT DEFAULT 0,
            "AuthorID" INT,
            FOREIGN KEY ("AuthorID") REFERENCES "User"("UserID")
        )
    `;

    let createCommentQuery = `
        CREATE TABLE IF NOT EXISTS "Comment" (
            "CommentID" SERIAL PRIMARY KEY,
            "Content" VARCHAR(300) NOT NULL,
            "Upvotes" INT DEFAULT 0,
            "CreatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "AuthorID" INT,
            FOREIGN KEY ("AuthorID") REFERENCES "User"("UserID"),
            "PostedFromID" INT,
            FOREIGN KEY ("PostedFromID") REFERENCES "Post"("PostID")
        )
    `;

    let createLikeQuery = `
        CREATE TABLE IF NOT EXISTS "Likes" (
            "LikeID" SERIAL PRIMARY KEY,
            "PostID" INT NOT NULL,
            "UserID" INT NOT NULL,
            "CreatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY ("PostID") REFERENCES "Post"("PostID"),
            FOREIGN KEY ("UserID") REFERENCES "User"("UserID"),
            UNIQUE ("PostID", "UserID")
        )
    `;

    try {
        await pool.query(createUserQuery);
    } catch (err) {
        console.error("Error Creating User Table:", err);
        return;
    }

    try {
        await pool.query(createPostQuery);
    } catch (err) {
        console.error("Error Creating Post Table:", err);
        return;
    }

    try {
        await pool.query(createCommentQuery);
    } catch (err) {
        console.error("Error Creating Comment Table:", err);
        return;
    }

    try {
        await pool.query(createLikeQuery);
    } catch (err) {
        console.error("Error Creating Like Table:", err);
        return;
    }

    console.log("Connected to Database");

};


initializeDB();

module.exports = pool;
