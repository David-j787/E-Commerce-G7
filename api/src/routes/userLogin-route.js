const { Router } = require("express");
const login = Router();
const { userLogin } = require('../utils/userLogin-utils');

login.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userLogged = await userLogin(username, password);
    res.json("User's credentials correct");
  } catch (error) {
    res.status(404).json('Ocurrió un error: '+ error);
  }
});

module.exports = login;
