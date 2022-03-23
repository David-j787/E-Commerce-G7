const { User } = require('../db');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize')

module.exports = {
    createUser: async (username, password, email, name, last_name, date_of_birth, address, city, zip_code, country) => {
        const findedUsername = await User.findOne({ where: { username:{ [Op.substring]: username }}});
        if (findedUsername) throw Error('El username ya se encuentra en uso');
        const findedEmail = await User.findOne({ where: { email:{ [Op.substring]: email }}});
        if (findedEmail) throw Error('El email ya se encuentra en uso');
        
        const hashPass = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            username,
            password: hashPass,
            email,
            name,
            last_name,
            date_of_birth,
            address,
            city,
            zip_code,
            country
        });
       
        return createdUser;        
    }
}