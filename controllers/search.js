
const Recipe = require("../models/recipe");

module.exports = {
  search
};

// search for the query word in the recipe titles
async function search(req, res) {
  const { query } = req.query;
    // case insensitive regex
  const searchPattern = new RegExp(query, 'i');
  const recipes = await Recipe.find({
    $or: [
      {title: {$regex: searchPattern}},
      {'ingredients.name': {$regex: searchPattern}}
    ]
    });
  res.render("recipes/index", {
    recipes,
    query
  });
}

