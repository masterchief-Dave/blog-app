const Post = require("./../models/post");
const catchAsync = require("./../utils/catch-async");
const AppError = require("./../utils/app-error");

exports.createPost = catchAsync(async (req, res, next) => {
  const post = await Post.create({
    user: req.user,
    title: req.body.title,
    summary: req.body.summary,
    image: req.body.image,
    tags: req.body.tags,
    category: req.body.category,
    timeToRead: req.body.timeToRead,
    postDocument: req.body.postDocument,
  });

  if (!post) return next(new AppError("Error creating post"));

  res.status(200).json({
    message: "success",
    data: {
      post,
    },
  });
});

exports.getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({
    message: "success",
    data: {
      result: posts.length,
      posts,
    },
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  if (!post) return next(new AppError("Post not found", "404"));

  res.status(200).json({
    message: "success",
    data: {
      post,
    },
  });
});
