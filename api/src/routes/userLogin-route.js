const { Router } = require("express");
const login = Router();
const { userLogin } = require('../utils/userLogin-utils');

login.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userLogged = await userLogin(username, password);
    const { cookie, user } = userLogged;
    res.cookie(cookie.name, cookie.token, cookie.options);
    res.json({token: cookie.token, user});
  } catch (error) {
    res.status(404).json('Ocurrió un error: '+ error);
  }
});

module.exports = login;
