const { Router } = require("express");
const { Role } = require('../db');

const setRoles = Router();

setRoles.post("/", async (req, res) => {
  const { roleName } = req.body;
  try {
    const newRole = await Role.create({
        name: roleName
    });
    res.json(newRole);
  } catch (error) {
    res.status(404).json('Error ocurred: '+ error);
  }
});

module.exports = setRoles;