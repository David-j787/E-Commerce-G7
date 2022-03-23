const { Router } = require("express");
const { getUsers } = require("../utils/getUsers-utils");
const allUsers = Router();

allUsers.get("/", async (req, res) => {
  try {
    const { userId = '' } = req.query;
    const findedUsers = await getUsers(userId);
    if(!findedUsers) return res.status(404).json({msg: 'No users found'});
    res.json(findedUsers);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allUsers;