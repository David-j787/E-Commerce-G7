const { Router } = require("express");
const { putDeleteUser } = require("../utils/deleteUser-utils");

const deleteUser = Router();

deleteUser.delete("/", async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await putDeleteUser(userId);
    res.send("the user was successfully deleted");
  } catch (err) {
    res.status(404).send("ocurrio un " + err);
  }
});

module.exports = deleteUser;
