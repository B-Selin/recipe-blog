const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
  },
  {
    timestamps: true,
  }
);

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // reference the ingredients from the model/ingredient schema
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],

  howTo: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [reviewSchema],
});

module.exports = mongoose.model("Recipe", recipeSchema);
