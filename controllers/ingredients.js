// const Ingredient = require("../models/ingredient");

// const Recipe = require("../models/recipe");

// module.exports = { addToIngredients };

// gather the ingredient info and push that info into ingredient model with the recipe its been added with.
// if there is no previous entry of that ingredient, add the ingredient and the recipe, if there is already an entry with the ingredient name, add the recipe to the ingredient's recipes array

// async function addToIngredients(req, res) {
//   const ingredients = req.body.ingredients.split(",");
//   for (let ingredient of ingredients) {
//     const ing = await Ingredient.findOne({ name: ingredient });

//     if (ing) {
//       // if the ingredients already exists in the ingredient db, add only the recipe to ingredient's recipes array
//       ing.recipes.push(req.params.id);
//       await ing.save();
//     } else {
//       const newIngredient = new Ingredient({
//         name: ingredient,
//         recipes: [req.params.id],
//       });
//       await newIngredient.save();
//     }
//   }
//   res.redirect(`/recipes/${req.params.id}`);
// }
