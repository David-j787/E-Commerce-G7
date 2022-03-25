const { Router } = require("express");
const router = Router();

// Import routers;
const allProducts = require("./allProducts-route");
const categories = require("./getCategory-route");
const user = require("./createUser-route");
const editUser = require("./EditUser")
const newCategory = require("./newCategory-route");
const newProduct = require("./newProduct-route");
const login = require("./userLogin-route");
const update = require("./updateProduct-route");
const productDetail = require("./productDetail-route");
const googleLogin = require("../utils/googleLogin-utils");
const createOrder = require("./createOrder-route");
const deleteUser = require("./deleteUser-route")
const allOrders = require("./getOrders-route");
const orderRoute = require("./getOrder-route")
const postReview = require("./newReview-route");
const allUsers = require("./getUsers-route");
const userRole = require("./userRole-route")
const orderStatus = require("./orderStatus-route")
const deleteProduct = require("./deleteProduct-route");

// Middlewares
const auth = require("./authenticate-route");
const verifyGoogleToken = require("../utils/verifyGoogleToken");
const { isAuthenticated } = require('../utils/isAuthenticated');
const adminOnly = require('../utils/adminOnly');
const superAdminOnly = require("../utils/superAdminOnly");
const allRoles = require("./getRoles-route");

const { createOrderMP, notificationOrder } = require("../utils/mpController");


// Config routers
// Example: router.use('/users', getUsers);
router.use("/products", allProducts);

router.use("/order", createOrder);

router.use("/order", orderRoute)

router.use("/order/status", adminOnly, orderStatus)

router.use("/category", newCategory);

router.use("/product", newProduct);

router.use("/user", user);

router.use("/user/role", superAdminOnly, userRole)

router.use("/user/update", adminOnly, editUser);

router.use("/user", adminOnly, deleteUser)

router.use("/categories", categories);

router.use("/login", login);

router.use("/googleLogin", verifyGoogleToken, googleLogin);

router.use("/authenticate", isAuthenticated, auth);

router.use("/product", update);

router.use("/product", productDetail);

router.use("/orders", allOrders);

router.use('/crear-orden',  createOrderMP)

router.use('/notification', notificationOrder)

router.use("/users", allUsers);

router.use("/review", postReview);

router.use("/product", adminOnly, deleteProduct)

router.use("/admin/authenticate", adminOnly, auth)

router.use("/roles", allRoles);

module.exports = router;
