// const {Router} = require("express")
const jwt = require('jsonwebtoken')
const {User} = require('../db')

const adminOnly = (req, res, next) => {
    const {token} = req.body
    try {
        jwt.verify(token, process.env.JWT_SECRET, async (err, result) => {
            if(err) throw Error('el token es invalido')
            const userId = result.id
            const admin = await User.findByPk(userId)
            if(admin.is_admin){
                return next()
            }
            throw Error('no tienes permisos')
        })
    } catch (err) {
        req.send('ocurrio un ' + err)
    }
}

module.exports = adminOnly