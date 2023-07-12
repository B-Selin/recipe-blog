const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// create a schema for the recipes
// recipes should have an ingredients array, where each ingredient is stored as a single item on an array, and a how to section with a string

const recipeSchema = new Schema({
  ingredients: [String],
  howTo: String,
});

module.exports = mongoose.model("Recipe", recipeSchema);