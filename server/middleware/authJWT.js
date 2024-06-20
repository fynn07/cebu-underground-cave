const jwt = require('jsonwebtoken');

//Middleware to provide user information to Posts 
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error : "Access Denied. No Token Provided"});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    
    } catch (err) {
        console.error("Invalid Token", err);
        return res.status(400).json({error : "Invalid Token"});
    }
}

module.exports = { authenticateJWT }