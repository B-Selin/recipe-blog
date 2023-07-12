const express = require("express");
const router = express.Router();

// You'll be creating this controller module next
const ingredientsCtrl = require("../controllers/ingredients");

// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");
