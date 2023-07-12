const Recipe = require("../models/recipe");

module.exports = {
  index,
};

// Indexing all the recipes we have in the recipe/index page
//
async function index(req, res) {
  const recipes = await Recipe.find({});
  res.render("recipes/index", { recipes });
}
