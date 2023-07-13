const express = require("express");
const router = express.Router();

// You'll be creating this controller module next
const reviewsCtrl = require("../controllers/reviews");

// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST /recipes/:id/reviews (create review for a rvipe)
router.post("/recipes/:id/reviews", ensureLoggedIn, reviewsCtrl.create);

// Do not forget to export routers
module.exports = router;
