# Reactjs_and_Django_Rest_CRUD_API
**A crud api made using djangorest framework and reactjs. It performs (create, retrieve,update, delete) operations on a recipe.
Recipees are associated with a particular user only the user associated with the recipe can update, delete the created recipe.**

## Installation:-

### Backend:-
**1**)Install virtualenv using command $ sudo apt install virtualenv

**2**)Create a virtual environment for djangorest api using command **$ virtualenv -p python3 env**

**3**)Install django and djangorest using pip3 command

### Frontend:-

**1**)Install npm(package manager) from online

**2**)Create frontend project using command **$ npx create-react-app {name_of_app}

## Running the server:-

Backend :- $ python3 manage.py runserver

Frontend :- $ npm start

## Problems that may occur:-

**1**)On starting frontend server one might encounter errors(like lifecycle error etc) in that case delete the nodu_modules folder and run **$ npm install** now run server again
