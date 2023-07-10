# LeBlanc Family Recipes

A recipe blog app where users can view, add, edit and delete recipes.<br>
Recipes can be searched by name or ingredient.<br>
Users can also review and rate recipes.<br>

### Tech Stack:

Express.js for the backend API<br>
MongoDB for the database<br>
EJS for templating the frontend<br>
JavaScript<br>

### Models:

User<br>
Recipe<br>
Ingredient<br>
Review<br>

### Relationships:

User has many Recipes (1:M)<br>
Recipe has many Ingredients (M:M) through RecipeIngredients<br>
Recipe has many Reviews (1:M)<br>
Review belongs to a User and Recipe (M:M)<br>

### Routes:

GET /recipes - View all recipes<br>
GET /recipes/new - Add a new recipe form<br>
POST /recipes - Create a new recipe<br>
GET /recipes/:id - View a single recipe<br>
PUT /recipes/:id - Edit a recipe<br>
DELETE /recipes/:id - Delete a recipe<br>
POST /recipes/: id/reviews - Add a review to a recipe<br>
GET /search?q=chicken - Search recipes by name or ingredient<br>

### Views:

recipes/index.ejs - View all recipes<br>
recipes/new.ejs - Add recipe form<br>
recipes/show.ejs - View a single recipe<br>
search.ejs - Display search results<br>

### Authentication:

Use Google Oauth for authenticaion

### Trello Board: LINK TO THE BOARD

#### Ice Box:

As a user, I want to view recipe links so I can browse recipes<br>
As a user, I want to be able to login so I can log my own recipes, and delete them<br>
As a user, I want to review recipes so I can share my opinions with others.<br>
As a user, I want to be able to search recipes by name<br>
As a user, I want to be able to search recipes by ingredients, so I can decide what to cook depending on what I have in my fridge<br>

### Wireframes: https://github.com/B-Selin/recipe-blog/tree/main/media/wireframes

Landing page: Header (with login/register links), Recipe List, Browse recipes section<br>
Recipe page: Recipe photo, Recipe title, Ingredients list, Instructions, Reviews/ratings section, Option to delete/edit for the recipe owner<br>
Add recipe page: Form to enter recipe title, description, photo, ingredients, instructions<br>

### ERD:

Users will have a one-to-many relationship with Recipes. A user can have many recipes, but a recipe can only belong to one user.<br>
Users:id (PK), name, email, password<br>

Recipes will have a many-to-many relationship with Ingredients through the RecipeIngredients join table. A recipe can have many ingredients, and an ingredient can be used in many recipes.<br>
Recipes will have a one-to-many relationship with Reviews. A recipe can have many reviews, but a review can only belong to one recipe.<br>
Recipes: id (PK), user_id (FK - Users), title, description, photo, instructions<br>

- recipe_id (FK - Recipes) means that the recipe_id column is a foreign key that references the primary key of the Recipes table.<br>

Ingredients will eventually have a many-to-many relationship with Recipes through the RecipeIngredients.<br>
An ingredient can be used in many recipes, and a recipe can have many ingredients.<br>

Ingredients: id (PK), name<br>

RecipeIngredients will have a foreign key relationship with Recipes (recipe_id) and Ingredients (ingredient_id).<br>
It joins Recipes and Ingredients in a many-to-many relationship. This is the last feauture to be built.<br>
RecipeIngredients: recipe_id (FK - Recipes), ingredient_id (FK - Ingredients)<br>

- ingredient_id (FK - Ingredients) means that the ingredient_id column is a foreign key that references the primary key of the Ingredients table.<br>

Reviews will have a foreign key relationship with Recipes (recipe_id) and -if I decide to link users to reviews- Users (user_id),<br>
Reviews: id (PK), recipe_id (FK - Recipes), user_id (FK - Users), rating, comment<br>

#### Relationships:

Users:Recipes - 1:M<br>
Recipes:Ingredients - M:M (through Recipe - Ingredients join table)<br>
Recipes:Reviews - 1:M<br>
