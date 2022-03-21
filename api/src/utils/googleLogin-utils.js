const { User } = require('../db');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const googleLogin = async (req, res) => {
    const {name, email, last_name} = req.body;
    try {
        let findedUser = await User.findOne({ where: { email:{ [Op.substring]: email }}});
        if (!findedUser) {
            const hashPass = await bcrypt.hash(Math.random().toString(36).slice(2, 12), 10);
            const googleUser = await User.create({
                username: Math.random().toString(36).slice(2, 10),
                password: hashPass,
                email,
                name,
                last_name: last_name || '',
                date_of_birth: '',
                address: '',
                city: '',
                zip_code: 0,
                country: '',
                is_admin: false
            });
            findedUser = await User.findOne({ where: { email:{ [Op.substring]: email }}});
        }
        
        const token = jwt.sign({id:findedUser.id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        })
        const user = findedUser.toJSON();
        delete user.password;
        return res.json({ token, user })

    } catch (error) {
        console.error(error)
        res.status(403);
    }
}

module.exports = googleLogin