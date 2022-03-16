const { Router } = require("express");
const { Product } = require("../db");
const allProducts = Router();

allProducts.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({});
    res.json(products);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allProducts;
