const express = require('express');
const { createPost } = require('../controller/contentController');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

router.route('/Post').post(authenticateJWT, createPost);

module.exports = router;

