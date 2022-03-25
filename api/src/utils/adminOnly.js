// const {Router} = require("express")
const jwt = require('jsonwebtoken')
const {User, Role} = require('../db')

const adminOnly = async (req, res, next) => {
    const {token} = req.body
    try {
        const verify = await jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if(err) throw Error('the token is invalid')
            return result.id
        })

        const user = await User.findByPk(verify, {include: {model: Role}})

        if(user.role.name === "Admin" || user.role.name === "SuperAdmin"){
            req.body.user_id = verify;
            return next();
        }else {
            throw Error('you dont have permissions')
        }        

    } catch (err) {
        res.status(403).send('ocurrio un ' + err)
    }
}

module.exports = adminOnly