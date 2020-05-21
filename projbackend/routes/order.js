const express = require("express");
const router = express.Router();

const {
    isSigndIn, 
    isAuthenticated, 
    isAdmin
} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updatestock} = require("../controllers/product");

const{} =require("../controllers/order");


module.exports = router;