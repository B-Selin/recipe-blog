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
  const recipe = await Recipe.findByIdAndUpdate(req.params.id);

  // get the ingredients data from the views/edit.ejs file and turn them into an array of objects
  const ingredients = req.body.ingredients.split(",").map((i) => {
    const [name, amount] = i.split("-").map((part) => part.trim());
    return {
      name,
      amount,
    };
    // filter the empty strings from the array
  }).filter((i) => i.name !== '');
  
  console.log(ingredients)

  // update the ingredients array


  recipe.title = req.body.title;
  recipe.howTo = req.body.howTo;
  recipe.ingredients = ingredients.pop();
  try {
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`); 
  } catch (err) {

    res.redirect(`/recipes`);
  }

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

  // Split the ingredientListHidden string by "-"

  const ingredientsArray = req.body.ingredientListHidden.split(',')
  .flatMap(item => item.trim().split(' - '))
  .map(item => item.trim());


  // Create a new array to hold the separated ingredients
  const ingredients = [];

  // Iterate over the ingredientsArray in steps of 2
  for (let i = 0; i < ingredientsArray.length-1; i += 2) {
    const ingredient = ingredientsArray[i];
    const amount = ingredientsArray[i + 1];
    const ingredientObject = { name: ingredient, amount: amount };
    ingredients.push(ingredientObject);
  }
  req.body.ingredients = ingredients
  
  console.log(req.body);
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
