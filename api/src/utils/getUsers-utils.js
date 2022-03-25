const { User, Role } = require('../db.js');

module.exports = {
    getUsers : async (userId, username, email, name, lastName) => {
        let findedUsers = await User.findAll({include: Role});
        if(!findedUsers) throw Error('Users not found.');

        let filteredUser = findedUsers;
        if (userId !== '') filteredUser = findedUsers.filter(user => {
            return user.id === Number(userId);
        })
        if (username !== '') filteredUser = findedUsers.filter(user => {
            return user.username === username;
        })
        if (email !== '') filteredUser = findedUsers.filter(user => {
            return user.email === email;
        })
        if (name !== '') filteredUser = findedUsers.filter(user => {
            return user.name === name;
        })
        if (lastName !== '') filteredUser = findedUsers.filter(user => {
            return user.last_name === lastName;
        })

        filteredUser = filteredUser.map(user => {
            const userModify = user.toJSON();
            delete userModify.password;
            return userModify;
        })          
      
        return filteredUser
    }
}
