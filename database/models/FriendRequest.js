const connection = require("../connection");
const Sequelize = require("sequelize");
const { UUID, UUIDV4, TEXT } = Sequelize;
const { Op } = require("sequelize");
const FriendRequest = connection.define('FriendRequest', {
})

FriendRequest.getRequests = (id) => {
    console.log('getting requests!!!!!')
    FriendRequest.findAll({
        where: {
            [Op.or]: [
                { userId: id },
                { friendRequestId: id }
            ]
        }
    })
}

module.exports = FriendRequest