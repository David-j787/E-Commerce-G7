const { Router } = require("express");
const router = Router();

// Import routers;
const allProducts = require("./allProducts");
const newCategory = require("./newCategory-route");

// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);
router.use("/category", newCategory);

router.get("/", (req, res) => {
  res.send("Ruta creada con éxito");
});

module.exports = router;
