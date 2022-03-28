const { Router } = require("express");
const {updateAccount} = require("../utils/updateAccount-utils")

const updateUser = Router();

updateUser.put("/", async (req, res) => {
  const userData = req.body
  try {
    const result = await updateAccount(userData) 
    res.status(200).send('User updated correctly');
  } catch (error) {
    res.status(404).json('Error ocurred: '+ error);
  }
});

module.exports = updateUser;