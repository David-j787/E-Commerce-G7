const { Category } = require("../db");

const postCategory = async (name) => {
  if (!name.length) return "name must not be empty";
  const newCategory = await Category.findOrCreate({ where: { name: name } });
  const [category, created] = newCategory;
  return created ? category : "the category already exists";
};

module.exports = { postCategory };
