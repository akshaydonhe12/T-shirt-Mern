const express =require ("express");
const router =express.Router(); 


const{getUserById, getUser} = require("../controllers/user");
const{isSigndIn, isAuthenticated, isAdmin} = require("../controllers/auth");


router.param("userId", getUserById);
router.get("/user/:userId",isSigndIn, isAuthenticated,getUser);


module.exports = router;
