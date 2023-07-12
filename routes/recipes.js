const express = require("express");
const router = express.Router();

// You'll be creating this controller module next
const recipesCtrl = require("../controllers/recipes");

// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

//GET /recipes -- We want to shoiw all recipes
router.get("/", recipesCtrl.index);

// Do not forget to export routers
module.exports = router;
