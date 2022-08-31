const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Vote = require("./vote");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Comment.hasMany(Vote, {
  foreignKey: "comment_id",
})

Comment.belongsToMany(User, {
  through: Vote,
  as: "voted_comments",
  foreignKey: "comment_id",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Comment, {
  foreignKey: "comment_id",
  onDelete: "SET NULL",
})

module.exports = { User, Post, Vote, Comment };