const express =require ("express");
const router =express.Router(); 


const{getUserById, getUser, updateUser} = require("../controllers/user");
const{isSigndIn, isAuthenticated, isAdmin} = require("../controllers/auth");


router.param("userId", getUserById);
router.get("/user/:userId",isSigndIn, isAuthenticated,  getUser);
router.put("/user/:userId",isSigndIn, isAuthenticated, updateUser)

module.exports = router;
