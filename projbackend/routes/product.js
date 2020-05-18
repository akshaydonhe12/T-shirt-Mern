const express = require("express");
const router = express.Router();

const {} = require("../controllers/product");
const {isSigndIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");



module.exports = router; 