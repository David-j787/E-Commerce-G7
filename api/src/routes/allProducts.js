const { Router } = require("express");
const allProducts = Router();
const { getProducts } = require('../utils/getProducts');

allProducts.get("/", async (req, res) => {
  try {
    const { name = '', category = '' } = req.query;
    const products = await getProducts(name, category);
    res.json(products);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allProducts;
