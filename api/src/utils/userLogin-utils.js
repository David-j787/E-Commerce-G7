const { User } = require('../db');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
    userLogin : async (username, password) => {
        const findedUser = await User.findOne({ where: { username:{ [Op.substring]: username }}});
        if (!findedUser) throw Error('El usuario no se encuentra en la base de datos');

        const validPassword = await bcrypt.compare(password, findedUser.password);
        if (!validPassword) throw Error('La password no es válida');

        return findedUser;
    }
}