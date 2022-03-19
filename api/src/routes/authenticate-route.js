const { Router } = require("express");
const auth = Router();
const { userLogin } = require('../utils/userLogin-utils');
const { User } = require('../db');

auth.post("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const userLogged = await User.findByPk(userId);
    if(userLogged) {
      const user = userLogged.toJSON();
      delete user.password;
      res.json({user})
    }else res.status(403).json({msg: "Invalid User"});;
  } catch (error) {
    res.status(404).json('Ocurrió un error: '+ error);
  }
});

module.exports = auth;
