const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const ingredientsCtrl = require("../controllers/ingredients");
// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

// router.post(
//   "/recipes/:id/ingredients",
//   ensureLoggedIn,
//   ingredientsCtrl.addToIngredients
// );

// module.exports = router;
