# LeBlanc Family Recipes

A recipe blog app where users can view, add, edit and delete recipes.
Recipes can be searched by name or ingredient.
Users can also review and rate recipes.

### Tech Stack:

Express.js for the backend API
MongoDB for the database
EJS for templating the frontend
JavaScript

### Models:

User
Recipe
Ingredient
Review

### Relationships:

User has many Recipes (1:M)
Recipe has many Ingredients (M:M) through RecipeIngredients join table
Recipe has many Reviews (1:M)
Review belongs to a User and Recipe (M:M)

### Routes:

GET /recipes - View all recipes
GET /recipes/new - Add a new recipe form
POST /recipes - Create a new recipe
GET /recipes/:id - View a single recipe
PUT /recipes/:id - Edit a recipe
DELETE /recipes/:id - Delete a recipe
POST /recipes/: id/reviews - Add a review to a recipe
GET /search?q=chicken - Search recipes by name or ingredient

### Views:

recipes/index.ejs - View all recipes
recipes/new.ejs - Add recipe form
recipes/show.ejs - View a single recipe
search.ejs - Display search results

### Authentication:

Use Google Oauth for authenticaion

### Trello Board: LINK TO THE BOARD

#### Ice Box:

As a user, I want to view recipe links so I can browse recipes
As a user, I want to be able to login so I can log my own recipes, and delete them
As a user, I want to review recipes so I can share my opinions with others.
As a user, I want to be able to search recipes by name
As a user, I want to be able to search recipes by ingredients, so I can decide what to cook depending on what I have in my fridge

### Wireframes: https://github.com/B-Selin/recipe-blog/tree/main/media/wireframes

Landing page: Header (with login/register links), Recipe List, Browse recipes section
Recipe page: Recipe photo, Recipe title, Ingredients list, Instructions, Reviews/ratings section, Option to delete/edit for the recipe owner
Add recipe page: Form to enter recipe title, description, photo, ingredients, instructions

### ERD:

Users will have a one-to-many relationship with Recipes. A user can have many recipes, but a recipe can only belong to one user.
Users:id (PK), name, email, password

Recipes will have a many-to-many relationship with Ingredients through the RecipeIngredients join table. A recipe can have many ingredients, and an ingredient can be used in many recipes.
Recipes will have a one-to-many relationship with Reviews. A recipe can have many reviews, but a review can only belong to one recipe.
Recipes: id (PK), user_id (FK - Users), title, description, photo, instructions

- recipe_id (FK - Recipes) means that the recipe_id column is a foreign key that references the primary key of the Recipes table.

Ingredients will eventually have a many-to-many relationship with Recipes through the RecipeIngredients.
An ingredient can be used in many recipes, and a recipe can have many ingredients.

Ingredients: id (PK), name

RecipeIngredients will have a foreign key relationship with Recipes (recipe_id) and Ingredients (ingredient_id).
It joins Recipes and Ingredients in a many-to-many relationship. This is the last feauture to be built.
RecipeIngredients: recipe_id (FK - Recipes), ingredient_id (FK - Ingredients)

- ingredient_id (FK - Ingredients) means that the ingredient_id column is a foreign key that references the primary key of the Ingredients table.

Reviews will have a foreign key relationship with Recipes (recipe_id) and -if I decide to link users to reviews- Users (user_id),
Reviews: id (PK), recipe_id (FK - Recipes), user_id (FK - Users), rating, comment

#### Relationships:

Users:Recipes - 1:M
Recipes:Ingredients - M:M (through Recipe - Ingredients join table)
Recipes:Reviews - 1:M
