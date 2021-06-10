const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});
/*
Blog.hasOne(User, {
    foreignKey: 'user_id',
});

Comment.hasOne(User, {
    foreignKey: 'user_id',
});*/

module.exports = { User, Blog, Comment };
