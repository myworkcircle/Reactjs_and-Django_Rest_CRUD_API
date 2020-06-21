# Reactjs_and_Django_Rest_CRUD_API
**A crud api made using djangorest framework and reactjs. It performs (create, retrieve,update, delete) operations on a recipe.
Recipees are associated with a particular user only the user associated with the recipe can update, delete the created recipe.**

## Installation:-

### Backend:-
**1**)Install virtualenv using command **$ sudo apt install virtualenv**

**2**)Create a virtual environment for djangorest api using command **$ virtualenv -p python3 env**

**3**)Install django and djangorest using pip3 command

### Frontend:-

**1**. Install npm(package manager) from online

**2**. Create frontend project using command **$ npx create-react-app {name_of_app}**

## Running the server:-

Backend :- $ python3 manage.py runserver

Frontend :- $ npm start

# Backend Overview

## Authentication

Token authentication has been used to authenticate user 

## Apps

Project consist of one app in backend 
1. Food recipe

## Models

Two models have been used

1. FoodRecipe model containing fields

class recipe(models.Model):

    name = models.CharField(max_length=256)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    time = models.CharField(max_length=256)
    directions = models.CharField(max_length=256)
    ingredients = models.CharField(max_length=256)
    image = models.FileField(upload_to='fileupload',blank=True)
    description = models.CharField(max_length=256)
    
2. Inbuilt auth user 

   It stores information related to user
   username, password
   
## Views

1. **listapiview**    :- for listing all recipes
2. **recipeviewset**  :- for creating recipes
3. **searchrecipe**   :- for searching for a particular recipe with a name
4. **updaterecipe**   :- for updating recipe details (only authorized user can update the recipe details created by him)
5. **userviewset**    :- for creating users
6. **userrecipes**    :- for fetching recipes related to a particular user
7. **createrecipe**   :- alternative view for creating a recipe using inbuilt ListCreateAPIView


# Frontend Overview

Frontend part has been split into 5 components namely

1. Login (login.js)
2. Creating Recipe (create_recipe.js)
3. Displaying a certain recipe (load_recipe.js)
4. Searching for a recipe (search_recipe.js)
5. Updating a recipe (update_recipe.js)


## Problems that may occur:-

**1**)On starting frontend server one might encounter errors(like lifecycle error etc) in that case delete the node_modules folder and run **$ npm install** now run server again
