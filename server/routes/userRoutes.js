const express = require('express');
const multer = require('multer');
const { createUser, loginUser, getUser, logoutUser, changeProfilePicture } = require('../controller/userController');
const { validateSignUpRequest, validateLoginRequest } = require('../middleware/validateRequest');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage : storage });

router.route('/signup').post(validateSignUpRequest, createUser);
router.route('/login').post(validateLoginRequest, loginUser);
router.route('/logout').post(logoutUser);
router.route('/getUser').get(authenticateJWT, getUser);
router.route('/changeProfilePicture').post(authenticateJWT, upload.single('Image') , changeProfilePicture);

module.exports = router;


