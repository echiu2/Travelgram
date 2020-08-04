// Creating connection between the app and the database (Sequelize similar to ORM)
const Sequelize = require("sequelize");
const connection = new Sequelize("postgres://localhost/game-network");

module.exports =  connection 
