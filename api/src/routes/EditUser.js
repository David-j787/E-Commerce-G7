const { Router } = require("express");
const update = Router();
const { User } = require('../db.js');

update.put("/update/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { 
        username, 
        password, 
        email, 
        name, 
        last_name, 
        date_of_birth, 
        address,
        city,
        zip_code,
        country
    } = req.body;

    const user = await User.findOne({
        where: {
            id
        }
    });

    if(!user){
        return res.status(404).send('El auto no está');
    }

    await user.update(
        {
            username: username ? username : user.name,
            password: password ? password : user.password,
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
     
    res.status(200).send('Put hecho');
    
  } catch (error) {
    res.status(404).json('Ocurrió un error: '+ error);
  }
});


module.exports = update;