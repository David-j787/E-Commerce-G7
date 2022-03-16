const { Router } = require('express');
const categories = require('./category-route')
const router = Router();

// Import routers;
const allProducts = require("./allProducts");
const user = require('./createUser-route');
const newCategory = require("./newCategory-route");
const update = require('./updateProduct-route');
const productDetail = require('./productDetail-route');

// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.use("/category", newCategory);

router.use('/user', user);

router.use('/categories', categories)

router.use('/product', update)

router.use('/product', productDetail)

module.exports = router;
