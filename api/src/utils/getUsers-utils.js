const { User, Role } = require('../db.js');

module.exports = {
    getUsers : async (userId) => {
        let findedUsers = await User.findAll({include: Role});
        if(!findedUsers) throw Error('Users not found.');

        findedUsers = findedUsers.map(user => {
            const userModify = user.toJSON();
            delete userModify.password;
            return userModify;
        })

        let filteredUser = [];
        if (userId !== '') filteredUser = findedUsers.filter(user => {
            return user.id === Number(userId);
        })
      
        return filteredUser.length ? filteredUser : findedUsers;
    }
}
