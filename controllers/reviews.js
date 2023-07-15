const Recipe = require("../models/recipe");
const Review = require("../models/review");

module.exports = {
  create,
  delete: deleteReview,
};

// creating a review:
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

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const recipe = await Recipe.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });
  console.log(recipe);
  // Rogue user!
  if (!recipe) return res.redirect("/recipes");
  // Remove the review from the array
  recipe.reviews.remove({ _id: req.params.id });

  // Save the updated recipe doc
  await recipe.save();
  // Redirect back to the recipe's show view
  res.redirect(`/recipes/${recipe._id}`);
}
