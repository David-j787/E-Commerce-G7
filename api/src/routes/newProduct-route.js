const { Router } = require("express");
const { postProduct } = require("../utils/newProduct-utils");
const newProduct = Router();

newProduct.post("/", async (req, res) => {
  const product = req.body;

  try {
    const result = await postProduct(product);
    res.json("the product was created successfully");
  } catch (err) {
    console.log(err)
    res.status(404).send("ocurrio un " + err);
  }
});

module.exports = newProduct;
