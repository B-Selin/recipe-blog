const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// // create a schema for the ingredients, and pass the schema to the model
// const ingredientSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
// });

// // get ingredients and amounts arrays
// const ingredients = req.body.ingredients;
// const amounts = req.body.amounts;

// const ingredientsWithAmounts = ingredients.map((ing, i) => {
//   return {
//     name: ing,
//     amount: amounts[i]
//   }
// });

// create a schema for the recipes
// recipes should have an ingredients array, where each ingredient is stored as a single item on an array, and a how to section with a string

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    amount: String,
    required: true,
  },
  howTo: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
