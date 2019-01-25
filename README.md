# nodejs-api-with-mongoose
>In development phase

This repository shows **in a simple way** how to build REST API in it's different methods and manage/persist data into **MongoDB** database using **Mongoose** ORM.

### The repository idea ###
This is a full basic CRUD (Create - Read - Update - Delete) .

### Understanding the project structure ###
The NodeJS Express server core file is located at folder:
```
(root)/src/index.js
```

The database connection configuration file is located at folder:
```
(root)/src/config/ ...
```

We will work with modules that export models related to schemas, so we can import it within API routes when you need. The model represents a real collection you have in MongoDB, mapping and typing each document data that will be saved within it. Look at folder:
```
(root)/src/models/ ...
```

The API route is located at folder:
```
(root)/src/routes/ ...
```
