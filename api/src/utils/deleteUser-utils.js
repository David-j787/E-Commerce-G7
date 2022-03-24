const { User } = require("../db");

const putDeleteUser = async (userId) => {
  if (!Number(userId)) throw Error("the id is not valid");

  const deleteUser = await User.destroy({ where: { id: userId } });

  if (!deleteUser) throw Error("user does not exist");

  return deleteUser;
};

module.exports = { putDeleteUser };
