# LeBlanc Family Recipes

A recipe blog for sharing family recipes. Users can view and search for recipes, and logged in users in addition to view and search functions can add, edit, delete, and review recipes.

![Home Page](/public/images/LandingPage.png)
![Recipe Page](/public/images/RecipeDetails.png)
![Login Page](/public/images/OAuthLogin.png)
![Add New Recipe Page](/public/images/AddNewRecipe.png)


## Project Description

LeBlanc Family Recipes is a full-stack recipe sharing app built using the MERN stack. Users can browse and search recipes without logging in. By signing up and logging in with Google OAuth, users can also add, edit, and delete their own recipes as well as leave reviews on other recipes.

The app uses Express and Node.js for the backend REST API, MongoDB and Mongoose for the database and models, and EJS for templating the frontend views.

The main features include:

- Browse all recipes
- Search recipes by title or ingredient
- View recipe details including ingredients, instructions, and reviews
- User authentication via Google OAuth
- Logged in users can create, edit, and delete recipes
- Logged in users can leave reviews on recipes
- Responsive mobile-friendly design

The code is organized using the MVC pattern - the routes define endpoints which call controller actions that interact with database models and render views to be sent back to the client.

Security is handled through sessions and authentication middleware. User passwords are securely hashed before storing in the database.

The app is deployed live on Heroku with MongoDB Atlas hosting the cloud database.

Some future enhancements include adding categories, image uploads, social features, and custom API endpoints.
## Technologies Used

[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 
[![EJS](https://img.shields.io/badge/EJS-8B0000?style=for-the-badge&logo=EJS&logoColor=white)](https://ejs.co/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Cody](https://img.shields.io/badge/Cody-000000?style=for-the-badge)](https://www.sourcegraph.com)

## Getting Started

Visit the [Trello board](https://trello.com/b/8TjLXywF/food-blog) to view tasks and progress.

Visit the [deployed app](https://leblanc-recipes-d950544771a6.herokuapp.com//) to view the live site.

## Sample Code

#### Sample route
```js
// Recipe routes
// GET /recipes
router.get('/', recipesCtrl.index); 
```


#### Sample controller
```js
async function index(req, res) {
  const recipes = await Recipe.find();
  res.render('recipes/index', {recipes});
}
```

#### Sample model
```js
const recipeSchema = new Schema({
  title: {type: String, required: true},
  ingredients: [IngredientSchema],
  instructions: {type: String, required: true}
});
```

#### Sample view
```js
<% recipes.forEach(function(recipe) { %>
  <div>
    <h2><%= recipe.title %></h2>
    <p><%= recipe.instructions %></p>
  </div>
<% }) %>
```



## Ice Box Items

- Multiple ingredient search
- Add recipe photos
- Add categories


## Contact Me
For any questions or suggestions, feel free to reach out via:
- LinkedIn : [Selin LeBlanc](https://www.linkedin.com/in/selin-leblanc/)