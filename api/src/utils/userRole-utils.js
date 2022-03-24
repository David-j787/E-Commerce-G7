const {User} = require("../db")

const putUserRole = async (role, userId) => {
    const user = await User.findByPk(userId)
    if(!user) throw Error("the user does not exist")

    user.roleId = role
    user.save()
    
    return user
}

module.exports = {putUserRole}