const { Router } = require("express");
const { productDelete } = require("../utils/deleteProduct-utils");

const deleteProduct = Router();

deleteProduct.delete("/", async (req, res) => {
  const { productId } = req.body;
  try {
    const result = await productDelete(productId);
    res.send("Product successfully deleted");
  } catch (err) {
    res.status(403).send("An error ocurred: " + err);
  }
});

module.exports = deleteProduct;
