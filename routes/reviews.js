const express = require("express");
const router = express.Router();

// You'll be creating this controller module next
const reviewsCtrl = require("../controllers/reviews");

// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST (create review

router.post("/recipes/:id/reviews", ensureLoggedIn, reviewsCtrl.create);

// DELETE /reviews
router.delete("/reviews/:id", ensureLoggedIn, reviewsCtrl.delete);

// Do not forget to export routers
module.exports = router;
