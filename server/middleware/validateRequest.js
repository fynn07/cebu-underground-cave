const express = require('express');
const { validationResult } = require('express-validator');

const validateSignUpRequest = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json( {error: errors.array()} );
    }
}

module.exports = {validateSignUpRequest}