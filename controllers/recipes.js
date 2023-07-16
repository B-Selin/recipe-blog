const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  delete: deleteRecipe,
  edit,
  update,
};

async function update(req, res) {
  req.body.done = !!req.body.done;

  await Recipe.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/recipes/${req.params.id}`);
}

async function edit(req, res) {
  const recipe = await Recipe.findById(req.params.id);
  console.log(recipe);
  res.render("recipes/edit", { recipe });
}

// delete the recipe as the owner user of that recipe
async function deleteRecipe(req, res) {
  try {
    await Recipe.deleteOne({ _id: req.params.id });
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
  }
}

// Indexing all the recipes we have in the recipe/index page
async function index(req, res) {
  const recipes = await Recipe.find({});

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
  const recipe = await Recipe.findById(req.params.id)
    .populate("user")
    .populate("reviews");
  res.render("recipes/show", { recipe });
}
