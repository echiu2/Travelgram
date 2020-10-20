const connection = require("../connection");
const Sequelize = require("sequelize");
const { UUID, UUIDV4, TEXT } = Sequelize;
// const { User, associate } = require("./User");
//const models = require(".");

const Post = connection.define("post", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  caption: {
    type: TEXT("MEDIUM"),
    allowNUll: false,
  },

//   associate: (models) => {
//     Post.belongsTo(models.User, {
//       foreignKey: "user_id",
//     });
//   },
});

// a post can only belong to one user
// Post.associate = (models) => {
//     Post.belongsTo(models.User, {
//         foreignKey: 'user_id'
//     })
// }

module.exports = Post;
