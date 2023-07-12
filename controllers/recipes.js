const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  // delete: deleteRecipe,
};

// Indexing all the recipes we have in the recipe/index page
//
async function index(req, res) {
  const recipes = await Recipe.find({});
  console.log(recipes);
  res.render("recipes/index", { recipes });
}

// creating a new recipe
async function newRecipe(req, res) {
  res.render("recipes/new", { recipe: {} });
}

//Define a recipesCtrl.create controller method
async function create(req, res) {
  // include logged in users id and name
  req.body.user = req.user._id;
  req.body.username = req.user.name;
  try {
    const recipe = await Recipe.create(req.body);
    res.redirect(`/recipes/${recipe._id}`);
  } catch (err) {
    res.render("recipes/new", {
      recipe: req.body,
      errors: err.errors,
    });
  }
}

// define an async show function
async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id).populate("user");
  console.log(recipe);
  res.render("recipes/show", { recipe });
}

// // delete the recipe as the owner user of that recipe
// async function deleteRecipe(req, res) {
//   const recipe = await Recipe.findById({
//     "recipes._id": req.params.id,
//     "recipes.user": req.user._id,
//   });
//   if (!recipe) return res.redirect("/recipes");

//   // Remove the recipe using the remove method available on Mongoose arrays
//   recipe.remove(req.params.id);
//   // Save the updated
//   await recipes.save();
//   // Redirect back to the recipe's show view
//   res.redirect(`/recipes/${recipe._id}`);
// }
