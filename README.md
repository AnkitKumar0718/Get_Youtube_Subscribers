# Get_Youtube_Subscribers

Get youtube subscribers is a backend application which allows RESTful API for retrieving data about all Subscribers. This project is developed using Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

## API Endpoints :

1. **"/ "** - This default route will render the "index.html file" when the app launches. http://localhost:3000/

2. **"/subscribers "** - This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers

3. **"/subscribers/names "** - This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names

4. **"/subscribers/:id "** - This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id

## Application Folder Structure:

1. [src/index.js] - To start the server.

2. [src/createDatabase.js] -> To make the connection with MongoDB database.

3. [src/data.js] -> Data which stored in the collection of MongoDB database.

4. [src/app.js] - For handling requests and responses.

5. [src/models/subscribers.js] -> For the schema of database.
   
6. [src/index.html] -> The home page for the application.

## Installation:

You'll need to have **Node.js** and **MongoDB** installed in your system . 

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **nodemon src/index.js**

## Dependencies:
Following dependencies are needed to run this application: 

1. express

2. mongoose

3. nodemon

## deployment:

https://get-youtube-subscribers-62ox.onrender.com

## Author

- Ankit Kumar
