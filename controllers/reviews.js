const Recipe = require("../models/recipe");

module.exports = {
  create,
  // delete: deleteReview,
};

async function create(req, res) {
  const recipe = await Recipe.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;

  // We can push (or unshift) subdocs into Mongoose arrays
  recipe.reviews.push(req.body);
  try {
    // Save any changes made to the recipe doc
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/recipes/${recipe._id}`);
}
