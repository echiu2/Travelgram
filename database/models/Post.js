const connection = require("../connection")
const Sequelize = require("sequelize");
const { UUID, UUIDV4, TEXT } = Sequelize;

const Post = connection.define("post", {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
    },
    caption: {
        type: TEXT('MEDIUM'),
        allowNUll: false,
    }
});


module.exports = Post;