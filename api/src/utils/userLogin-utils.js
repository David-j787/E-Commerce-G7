const { User } = require('../db');
const { Op } = require('sequelize');

module.exports = {
    userLogin : async (username, password) => {
        const findedUser = await User.findOne({ where: { username:{ [Op.substring]: username }}});
        if (!findedUser) throw Error('El usuario no se encuentra en la base de datos');

        console.log(findedUser);
        return findedUser;
    }
}