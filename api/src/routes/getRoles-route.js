const { Router } = require("express");
const { getRoles } = require("../utils/getRoles-utils");
const allRoles = Router();

allRoles.get("/", async (req, res) => {
  try {
    const findedRoles = await getRoles();
    if(!findedRoles) return res.status(404).json({msg: 'No roles found'});
    res.json(findedRoles);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allRoles;