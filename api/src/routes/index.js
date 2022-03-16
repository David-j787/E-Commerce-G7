const { Router } = require('express');
const categories = require('./category-route')
const router = Router();

// Import routers;
const allProducts = require("./allProducts");
const user = require('./createUser-route');

// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.get("/", (req, res) => {
  res.send("Ruta creada con éxito");
});
router.use('/user', user);
router.use('/categories', categories)

module.exports = router;
