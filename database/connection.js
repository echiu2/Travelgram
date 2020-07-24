
// Creating connection between the app and the database (Sequelize similar to ORM)
const Sequelize = require("sequelize");
const connection = new Sequelize("postgres://localhost/game-network");

// Create a sync function to seed data into the database (kind of like a dummy test)


module.exports =  connection 
