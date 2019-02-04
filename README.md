# nodejs-api-with-mongoose

This repository shows **in a simple way** how to build REST API in it's different methods and manage/persist data into **MongoDB** database using **Mongoose** ORM. 

In this application we are going work with a "users" collection with only four fields, mainteined by API: name, email, username and password.

We are going to cover GET, POST, PUT and DELETE methods, each of them handling the "users" MongoDB collection with Mongoose ORM.

### The repository idea ###
This is a full basic CRUD (Create - Read - Update - Delete) .

### Understanding the project, how it's structured and configured ###
The NodeJS Express server core file is located at folder:
```
(root)/src/index.js
```

The server port is configured to listen **2000**, but you can change it at line 1 handling the `port` variable, look:
```
1. const port = 2000;
```

The database connection is configured at `index.js` file at line 11, you just need to change the text "your_database_connection" to your own and thats all! The code is:
```
11. const db = mongoose.connect('mongodb://your_database_connection', { useNewUrlParser: true });
```

We will work with modules that export models - that are related to schemas - so we can import it within API routes everytime when you want to handle database collections. 

The model represents a real collection you have in MongoDB, mapping and typing each document data that will be saved within it. Look at:
```
(root)/src/models/users.js
```

The "users" API route imported and registered into `index.js` is located at:
```
(root)/src/routes/users.js
```

### Requirements
You must have **npm** in your OS by installing **NodeJS**, easily found at the official website.

The **npm** is used to install the project dependencies and run it by command line.

### Running the React application
First of all you must open your terminal and go to the ```/src/``` where you can see a **package.json**. 

Now you need to install the npm dependencies using the command ```npm install```.

Finally you just must enter ```npm start``` to run the NodeJS Express application.

That's all!

### Developed by

Rodrigo Quiñones Pichioli, since Oct/2018
