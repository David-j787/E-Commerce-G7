const { Router } = require("express");
const { getUsers } = require("../utils/getUsers-utils");
const allUsers = Router();

allUsers.get("/", async (req, res) => {
  try {
    const { userId = '', username = '', email = '', name = '', lastName = '' } = req.query;
    const findedUsers = await getUsers(userId, username, email, name, lastName);
    if(!findedUsers) return res.status(404).json({msg: 'No users found'});
    res.json(findedUsers);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allUsers;