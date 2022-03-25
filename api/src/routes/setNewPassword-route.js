const { Router } = require("express");
const { setPassword } = require("../utils/setNewPassword-utils");
const { User } = require('../db');
const setNewPass = Router();

setNewPass.put("/set", async (req, res) => {
  try {
    const { userId, inputs } = req.body;
    const userFinded = await setPassword(userId, inputs);
    if(!userFinded) return res.status(404).json("User not found");
    res.json('The Password has been set successfully');
  } catch (error) {
    res.status(403).json('Error ocurred: '+ error);
  }
});

setNewPass.put("/reset", async (req, res) => {
  try {
    const { userId } = req.body;
    const userFinded = await User.findByPk(userId);
    if(!userFinded) throw Error('User not found');
    userFinded.reset_password = true;
    userFinded.save();
    res.json({msg: 'You force a Password Reset for the User'});
  } catch (error) {
    res.status(404).json('Error ocurred: '+ error);
  }
});

module.exports = setNewPass;
