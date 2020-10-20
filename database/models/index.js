const User = require('./User')
const Post = require('./Post')
const Friend = require('./Friend')
const FriendRequest = require('./FriendRequest')
//associations
Post.belongsTo(User)
User.hasMany(Post)

FriendRequest.belongsTo(User)
User.hasMany(FriendRequest)

User.belongsToMany(User, { as: 'friendId', through: Friend })
//when we request to add a friend, it should create a new row into OpenRequest table.
//friend who recieves request should be able to see all OpenRequest and confirm to add.
//then row will be removed from OpenRequest and a friendship will be created for both.

module.exports = {
    User,
    Post,
    Friend,
    FriendRequest
}