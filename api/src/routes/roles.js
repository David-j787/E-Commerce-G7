const { Router } = require("express");
const roles = Router();
const { Role } = require('../db.js');

roles.post("/", async (req, res) => {
  try {
    const {id, name} = req.body;

    const rol = await Role.create({
        id,
        name
    });

    res.send(rol);
  } catch (err) {
    res.status(404).send(err);
  }
});

roles.get("/", async (req, res) => {
    try {
      const {id, name} = req.body;
  
      const roles = await Role.findAll();
  
      res.send(roles);
    } catch (err) {
      res.status(404).send(err);
    }
  });

module.exports = roles;