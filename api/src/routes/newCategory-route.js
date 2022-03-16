const { Router } = require("express");
const { postCategory } = require("../utils/newCategory-utils");
const newCategory = Router();

newCategory.post("/", async (req, res) => {
  const { nameCategory } = req.body;
  try {
    const result = await postCategory(nameCategory);
    return typeof result === "string"
      ? res.status(404).send(result)
      : res.json(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = newCategory;
