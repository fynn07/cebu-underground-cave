const express = require('express');
const multer = require('multer');

const { createPost, getPost, getPostByID, createComment, getComments, getAllUsers } = require('../controller/contentController');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage : storage });

router.route('/post').post(authenticateJWT, upload.single('Image') , createPost);
router.route('/post').get(getPost);
router.route('/post/:id').get(getPostByID);
router.route('/comment').post(authenticateJWT, createComment);
router.route('/comment').get(getComments);
router.route('/users').get(getAllUsers);


module.exports = router;

