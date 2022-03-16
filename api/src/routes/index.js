const { Router } = require("express");
const router = Router();

// Import routers;
const allProducts = require("./allProducts");

// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.get("/", (req, res) => {
  res.send("Ruta creada con éxito");
});

module.exports = router;
