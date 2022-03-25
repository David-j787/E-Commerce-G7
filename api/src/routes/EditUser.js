const { Router } = require("express");
const {putEditUser} = require("../utils/editUser-utils")

const update = Router();


update.put("/", async (req, res) => {
  const userData = req.body
  try {
    const result = await putEditUser(userData) 
    res.status(200).send('Put hecho');
  } catch (error) {
    res.status(404).json('ocurrio un error: '+ error);
  }
});


module.exports = update;