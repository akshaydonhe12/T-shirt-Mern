const express = require ("express");
const router = express.Router();


const {getCategoryById, createCategory,getCategory, getAllCategory} = require("../controllers/category");
const {isSigndIn, isAuthenticated , isAdmin} = require("../controllers/auth");
const {getUserById } = require("../controllers/user");

//param
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual Routes
router.post("/category/create/:userID", isSigndIn, isAuthenticated , isAdmin, createCategory);
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory );


module.exports = router;