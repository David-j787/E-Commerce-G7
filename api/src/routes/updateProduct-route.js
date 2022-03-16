const { Router } = require("express");
const update = Router();
const { updateProduct } = require('../utils/updateProduct-utils');

update.put("/update", async (req, res) => {
  try {
    const productObj = req.body;
    const updatedProduct = await updateProduct(productObj);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json('An error has ocurred: '+ error);
  }
});

module.exports = update;