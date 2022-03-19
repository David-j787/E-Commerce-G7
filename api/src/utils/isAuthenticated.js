const jwt = require('jsonwebtoken');
const { User } = require('../db');

module.exports = {
    isAuthenticated: (req, res, next) => {
        const token = req.body.token
        if(!token) return res.status(404).json({msg: 'Token not found'})
        try {
            jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if(err) throw Error('Invalid Token')
            req.body.userId = result.id;
            });                
            return next();
        } catch (error) {
            console.log(error)
            res.status(403).json({msg: error})
        }
    }
}