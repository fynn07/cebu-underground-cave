const express = require('express');
const { createUser } = require('../controller/userController');
const { body } = require('express-validator');
const { validateSignUpRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.route('/signup').post(validateSignUpRequest, createUser);

module.exports = router;


