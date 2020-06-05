const express = require("express");
const router = express.Router();

const { isSigndIn,isAuthenticated } = require("../controllers/auth");

const {getToken, processPayment} = require ("../controllers/paymentB");

router.get("/payment/gettoken/:userId", isSigndIn, isAuthenticated, getToken);
router.post("/payment/braintree/:userId", isSigndIn, isAuthenticated, processPayment);
module.exports = router;