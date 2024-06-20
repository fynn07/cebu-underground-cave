const express = require('express');
const multer = require('multer');

const { createPost, getPostOnline, getPostOffline, getPostByIdOffline, getPostByIdOnline , createComment, getComments, getAllUsers, likePost } = require('../controller/contentController');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage : storage });

router.route('/post').post(authenticateJWT, upload.single('Image') , createPost);
router.route('/post_online').get(authenticateJWT, getPostOnline);
router.route('/post_offline').get(getPostOffline);
router.route('/post_online/:id').get(authenticateJWT, getPostByIdOnline);
router.route('/post_offline/:id').get(getPostByIdOffline);
router.route('/comment').post(authenticateJWT, createComment);
router.route('/comment').get(getComments);
router.route('/users').get(getAllUsers);
router.route('/like').post(authenticateJWT, likePost);


module.exports = router;

