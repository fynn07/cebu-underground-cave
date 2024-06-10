const express = require('express');
const { createUser, loginUser } = require('../controller/userController');
const { validateSignUpRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.route('/signup').post(validateSignUpRequest, createUser);
router.route('/login').get(loginUser);

module.exports = router;


