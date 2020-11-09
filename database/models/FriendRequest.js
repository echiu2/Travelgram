const connection = require("../connection");
const Sequelize = require("sequelize");
const { UUID, UUIDV4, TEXT } = Sequelize;

const FriendRequest = connection.define('FriendRequest', {
    // id: {
    //     primaryKey: true,
    //     type: UUID,
    //     defaultValue: UUIDV4,
    //     allowNull: false,
    // },
    // friendId: {
    //     type: UUID,
    //     allowNull: false
    // }
})

module.exports = FriendRequest