const express = require("express");
const router = express.Router();

const {getProductById, createProduct} = require("../controllers/product");
const {isSigndIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//param
router.param("userId", getUserById);
router.param("productId", getProductById);


//actual route

router.post("/product/create/:userId", isSigndIn, isAuthenticated, isAdmin, createProduct);


module.exports = router; 