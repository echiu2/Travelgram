const User = require('./User')
const Post = require('./Post')

Post.belongsTo(User)
User.hasMany(Post)

module.exports = {
    User,
    Post
}