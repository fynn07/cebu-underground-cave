const express = require('express');
const { createPost, getPost, getPostByID, createComment, getComments, getAllUsers } = require('../controller/contentController');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

router.route('/post').post(authenticateJWT, createPost);
router.route('/post').get(getPost);
router.route('/post/:id').get(getPostByID);
router.route('/comment').post(authenticateJWT, createComment);
router.route('/comment').get(getComments);
router.route('/users').get(getAllUsers);


module.exports = router;

