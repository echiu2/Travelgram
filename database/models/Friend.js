const connection = require("../connection");
const Sequelize = require("sequelize");
const { UUID, UUIDV4, TEXT } = Sequelize;

const Friend = connection.define('Friend', {

})

module.exports = Friend