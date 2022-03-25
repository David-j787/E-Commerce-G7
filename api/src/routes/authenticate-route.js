const { Router } = require("express");
const auth = Router();
const { User } = require('../db');

auth.post("/", async (req, res) => {
  try {
    const { user_id } = req.body;
    const userLogged = await User.findByPk(user_id);
    if(userLogged) {
      const user = userLogged.toJSON();
      delete user.password;
      res.json({user})
    }else res.status(403).json({msg: "Invalid User"});;
  } catch (error) {
    res.status(403).json('Ocurrió un error: '+ error);
  }
});

module.exports = auth;
