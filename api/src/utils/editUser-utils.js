const { User } = require('../db.js');
const bcrypt = require('bcrypt');

const putEditUser = async (userData) => {
    const user = await User.findOne({where: {username: userData.username}})

    if(!user) throw Error("User doesn't exist")

    const { username, password, email, name, last_name, date_of_birth, address, city, zip_code, country} = userData;

    const hashPass = password && await bcrypt.hash(password, 10)
    
    await user.update(
        {
            username: username ? username : user.name,
            password: password ? hashPass : user.password,
            email: email ? email : user.email,
            name: name ? name : user.name,
            last_name: last_name ? last_name : user.last_name,
            date_of_birth: date_of_birth ? date_of_birth : user.date_of_birth,
            address: address ? address : user.address,
            city: city ? city : user.city,
            zip_code: zip_code ? zip_code : user.zip_code,
            country: country ? country : user.country
        }
    )

    return user
}

module.exports = {putEditUser}
