const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    userLogin : async (username, password) => {
        const findedUser = await User.findOne({ where: { username:{ [Op.substring]: username }}});
        if (!findedUser) throw Error('El usuario no se encuentra en la base de datos');

        const validPassword = await bcrypt.compare(password, findedUser.password);
        if (!validPassword) throw Error('La password no es válida');
        else {
            const token = jwt.sign({id:findedUser.id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES
            })
            const cookiesOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            const cookie = {name: 'jwt', token, options: cookiesOptions};
            const user = findedUser.toJSON();
            delete user.password;
            return { cookie, user }
        }
    }
}