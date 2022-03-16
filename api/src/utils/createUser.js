const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize')

module.exports = {
    createUser: async (username, password, email, name, lastName, dateOfBirth, address, city, zip_code, country) => {
        const findedUsername = await User.findOne({ where: { username:{ [Op.like]: username }}});
        if (findedUsername) throw Error('El username ya se encuentra en uso');
        const findedEmail = await User.findOne({ where: { email:{ [Op.like]: email }}});
        if (findedEmail) throw Error('El email ya se encuentra en uso');
        
        const hashPass = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            username,
            password: hashPass,
            email,
            name,
            lastName,
            dateOfBirth,
            address,
            city,
            zip_code,
            country,
            isAdmin: false
        });

        console.log(createdUser);
        
        return createdUser;        
    }
}