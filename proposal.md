A recipe blog app where users can view, add, edit and delete recipes.
Recipes can be searched by name or ingredient.
Users can also review and rate recipes.

Tech Stack:

Express.js for the backend API
MongoDB for the database
EJS for templating the frontend
JavaScript

Models:
User
Recipe
Ingredient
Review

Relationships:
User has many Recipes (1:M)
Recipe has many Ingredients (M:M) through RecipeIngredients join table
Recipe has many Reviews (1:M)
Review belongs to a User and Recipe (M:M)

Routes:
GET /recipes - View all recipes
GET /recipes/new - Add a new recipe form
POST /recipes - Create a new recipe
GET /recipes/:id - View a single recipe
PUT /recipes/:id - Edit a recipe
DELETE /recipes/:id - Delete a recipe
POST /recipes/: id/reviews - Add a review to a recipe
GET /search?q=chicken - Search recipes by name or ingredient

Views:
recipes/index.ejs - View all recipes
recipes/new.ejs - Add recipe form
recipes/show.ejs - View a single recipe
search.ejs - Display search results

Authentication:
Use Google Oauth for authenticaion

Trello Board:

Ice Box:

As a user, I want to view recipe links so I can browse recipes
As a user, I want to be able to login so I can log my own recipes, and delete them
As a user, I want to review recipes so I can share my opinions with others.
As a user, I want to be able to search recipes by name
As a user, I want to be able to search recipes by ingredients, so I can decide what to cook depending on what I have in my fridge

Wireframes:

Landing page: Header (with login/register links), Recipe List, Browse recipes section
Recipe page: Recipe photo, Recipe title, Ingredients list, Instructions, Reviews/ratings section, Option to delete/edit for the recipe owner
Add recipe page: Form to enter recipe title, description, photo, ingredients, instructions

ERD:

Users:id (PK), name, email, password

Recipes: id (PK), user_id (FK - Users), title, description, photo, instructions

Ingredients: id (PK), name

RecipeIngredients: recipe_id (FK - Recipes), ingredient_id (FK - Ingredients)

Reviews: id (PK), recipe_id (FK - Recipes), user_id (FK - Users), rating, comment

Relationships:

Users:Recipes - 1:M
Recipes:Ingredients - M:M (through Recipe - Ingredients join table)
Recipes:Reviews - 1:M
