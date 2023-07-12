const express = require("express");
const router = express.Router();

// You'll be creating this controller module next
const recipesCtrl = require("../controllers/recipes");

// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

//GET /recipes -- We want to shoiw all recipes
router.get("/", recipesCtrl.index);

//GET /recipes/new -- we want to show the form to create a new recipe
router.get("/new", ensureLoggedIn, recipesCtrl.new);

//POST /recipes -- we want to create a new recipe and then redirect to its show page
router.post("/", ensureLoggedIn, recipesCtrl.create);

//GET /recipes/:id (show functionality)
router.get("/:id", recipesCtrl.show);

// Do not forget to export routers
module.exports = router;
