const { Router } = require("express");
const categories = require("./category-route");
const router = Router();

// Import routers;
const allProducts = require("./allProducts");
const newCategory = require("./newCategory-route");
const newProduct = require("./newProduct-route");

// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);
router.use("/category", newCategory);
router.use("/product", newProduct);

router.get("/", (req, res) => {
  res.send("Ruta creada con éxito");
});

router.use("/categories", categories);

module.exports = router;
