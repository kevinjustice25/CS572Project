// middlewares/auth.js
const jwt = require("jsonwebtoken");
const SECRETE_PRIVATE_KEY = process.env.SECRETE_PRIVATE_KEY;

module.exports = (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, SECRETE_PRIVATE_KEY );//put this in .env file
        next();
    } catch (error) {
        res.status(401).json({ message: "No token provided" });
    }
};
