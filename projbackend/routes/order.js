const express = require("express");
const router = express.Router();

const {
    isSigndIn, 
    isAuthenticated, 
    isAdmin
} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updatestock} = require("../controllers/product");

const{getOrderById} =require("../controllers/order");

//params
 router.param("userId", getUserById);
 router.param("orderId", getOrderById);




//actual route




module.exports = router;