const { Category } = require("../db");

const postCategory = async (name) => {
  const newCategory = await Category.findOrCreate({ where: { name: name } });
  const [category, created] = newCategory;
  return created ? category : "the category already exists";
};

module.exports = { postCategory };
