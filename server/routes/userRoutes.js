const express = require('express');
const { createUser, loginUser, getUser, logoutUser } = require('../controller/userController');
const { validateSignUpRequest, validateLoginRequest } = require('../middleware/validateRequest');
const { authenticateJWT } = require('../middleware/authJWT');

const router = express.Router();

router.route('/signup').post(validateSignUpRequest, createUser);
router.route('/login').post(validateLoginRequest, loginUser);
router.route('/logout').post(logoutUser);
router.route('/getUser').get(authenticateJWT, getUser);

module.exports = router;


