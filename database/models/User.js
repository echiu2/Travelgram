const connection = require("../connection")
const Sequelize = require("sequelize");
const { UUID, UUIDV4, STRING } = Sequelize;

// Creating table schemas for user
const User = connection.define("user", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  firstname: {
    type: STRING,
    allowNull: false,
  },
  lastname: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allownull: false
  },
  password: {
    type: STRING,
    allownull: false
  }
});

module.exports = User;