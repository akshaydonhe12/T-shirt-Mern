const express = require("express");
const router = express.Router();

const {getProductById} = require("../controllers/product");
const {isSigndIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//param
router.param("userId", getUserById);
router.param("productId", getProductById);




module.exports = router; 