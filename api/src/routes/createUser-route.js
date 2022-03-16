const { Router } = require("express");
const { Product } = require("../db");
const user = Router();
const { createUser }  = require('../utils/createUser');

user.post('/', async (req, res) => {
    try {
        const { username, password, email, name, lastName, dateOfBirth, address, city, zip_code, country } = req.body;
        const createdUser = await createUser(username, password, email, name, lastName, dateOfBirth, address, city, zip_code, country);
        if(!createdUser) res.status(404).send('Error al agregar el usuario a base de datos');
        res.send('USUARIO CREADO CON ÉXITO! :)');
    } catch (error) {
        res.status(404).json('No se pudo guardar el Usuario: ' + error);
    }
});

module.exports = user;