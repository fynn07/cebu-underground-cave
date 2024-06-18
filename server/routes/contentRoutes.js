const express = require('express');
const { createPost, getPost, getPostByID, createComment } = require('../controller/contentController');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

router.route('/post').post(authenticateJWT, createPost);
router.route('/post').get(getPost);
router.route('/post/:id').get(getPostByID);
router.route('/comment').post(authenticateJWT, createComment);


module.exports = router;

