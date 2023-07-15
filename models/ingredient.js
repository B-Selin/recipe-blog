const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      amount: String,
      required: true,
      unique: true,
    },
    // recipes that includes the ingredient
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
