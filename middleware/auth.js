const jwt = require('jsonwebtoken');

const config = require('config');


module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');

    //Check if not token 
    if(!token) {
        return res.status(401).json({msg: 'No token, authorization denied'});
    }
    // verify Jwt Token 
    try {
        const decoded = jwt.verify(token, 'jwtSecret');

        req.user = decoded.user; 

        next();

    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'});
    }

}