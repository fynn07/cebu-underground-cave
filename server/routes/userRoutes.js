const express = require('express');
const { createUser, loginUser, logoutUser } = require('../controller/userController');
const { validateSignUpRequest, validateLoginRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.route('/signup').post(validateSignUpRequest, createUser);
router.route('/login').post(validateLoginRequest, loginUser);
router.route('/logout').post(logoutUser);

module.exports = router;


