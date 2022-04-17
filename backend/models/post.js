const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: [true, "A post should have a title"],
  },
  image: {
    type: String,
  },
  summary: {
    type: String,
    required: [true, "A post should have a summary"],
  },
  tags: {
    type: String,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
  timeToRead: {
    type: String,
  },
  postDocument: {
    type: String,
  },
});

postSchema.pre(/^find/, async function (next) {
  await this.populate("user");

  next();
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
