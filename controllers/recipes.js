const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
};

// Indexing all the recipes we have in the recipe/index page
//
async function index(req, res) {
  const recipes = await Recipe.find({});
  console.log(recipes);
  res.render("recipes/index", { recipes });
}
// showing the detail of the recipe on recipe/show page
async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id);
  console.log(recipe);
  res.render("recipes/show", { recipe });
}
// creating a new recipe
async function newRecipe(req, res) {
  res.render("recipes/new", { recipe: {} });
}

//Define a recipesCtrl.create controller method
async function create(req, res) {
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
  const recipe = await Recipe.findById(req.params.id);
  console.log(recipe);
  res.render("recipes/show", { recipe });
}
