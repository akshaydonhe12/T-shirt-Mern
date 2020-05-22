const express = require("express");
const router = express.Router();

const {
    isSigndIn, 
    isAuthenticated, 
    isAdmin
} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updatestock} = require("../controllers/product");

const{getOrderById, createOrder} =require("../controllers/order");

//params
 router.param("userId", getUserById);
 router.param("orderId", getOrderById);




//actual route

//create route

router.post(
    "/order/create/:userId", 
    isSigndIn, 
    isAuthenticated, 
    pushOrderInPurchaseList, 
    updatestock,
    createOrder
    );

module.exports = router;