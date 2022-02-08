const User = require('./user');
const Post = require('./post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});  

module.exports = { User, Post };