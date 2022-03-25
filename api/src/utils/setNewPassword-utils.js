const { User } = require('../db');
const bcrypt = require('bcrypt');

module.exports = {
    setPassword : async (userId, inputs) => {
        const findedUser = await User.findByPk(userId);
        if (!findedUser) throw Error('User not found');

        const validPassword = await bcrypt.compare(inputs.currentPassword, findedUser.password);
        if (!validPassword) throw Error('Invalid Password');
        else {
            const hashPass = await bcrypt.hash(inputs.newPassword, 10);
            findedUser.password = hashPass;
            if(findedUser.reset_password) findedUser.reset_password = false;
            
            findedUser.save()
        }
        return findedUser;
    }
}