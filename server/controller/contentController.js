const pool = require('../config/database');
const jwt = require('jsonwebtoken');

const createPost = async(req, res) => {
    return res.status(200).json(req.user);
}

module.exports = { createPost };