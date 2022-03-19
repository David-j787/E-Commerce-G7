const { Router } = require("express");
const categories = require("./category-route");
const router = Router();
const { isAuthenticated } = require('../utils/isAuthenticated');

// Import routers;
const allProducts = require("./allProducts-route");
const user = require("./createUser-route");
const newCategory = require("./newCategory-route");
const newProduct = require("./newProduct-route");
const login = require("./userLogin-route");
const update = require("./updateProduct-route");
const productDetail = require("./productDetail-route");
const googleLogin = require("../utils/googleLogin-utils");

// Middlewares
const auth = require("./authenticate-route");
const verifyGoogleToken = require("../utils/verifyGoogleToken");


// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.use("/category", newCategory);

router.use("/product", newProduct);

router.use("/user", user);

router.use("/categories", categories);

router.use("/login", login);

router.use("/googleLogin", verifyGoogleToken, googleLogin);

router.use("/authenticate", isAuthenticated, auth);

router.use("/product", update);

router.use("/product", productDetail);

module.exports = router;
