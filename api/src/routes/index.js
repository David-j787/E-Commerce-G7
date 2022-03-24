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
const createOrder = require("./createOrder-route");
const allOrders = require("../routes/getOrders-route");
const orderRoute = require("./order-route")

// Middlewares
const auth = require("./authenticate-route");
const verifyGoogleToken = require("../utils/verifyGoogleToken");
const { createOrderMP, notificationOrder } = require("../utils/mpController");


// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.use("/order", createOrder);

router.use("/order", orderRoute)

router.use("/category", newCategory);

router.use("/product", newProduct);

router.use("/user", user);

router.use("/categories", categories);

router.use("/login", login);

router.use("/googleLogin", verifyGoogleToken, googleLogin);

router.use("/authenticate", isAuthenticated, auth);

router.use("/product", update);

router.use("/product", productDetail);

router.use("/orders", allOrders);

router.use('/crear-orden',  createOrderMP)

router.use('/notification', notificationOrder)
module.exports = router;
