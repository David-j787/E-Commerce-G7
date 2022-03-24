const jwt = require("jsonwebtoken")
const {User} = require('../db')

const superAdminOnly = async (req, res, next) => {
    const {token} = req.body
    try {
        const verify = await jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if(err) throw Error('the token is invalid')
            return result.id
        })
        
        const user = await User.findByPk(verify)

        if(user.roleId === 1)
            return next()
        throw Error('you dont have permissions')

    } catch (err) {
        res.status(404).send('ocurrio un ' + err)
    }
}

module.exports = superAdminOnly
