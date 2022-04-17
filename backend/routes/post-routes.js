const express = require("express");
const postController = require("./../controllers/post-controller");
const authController = require("./../controllers/auth-controller");
const router = express.Router();

router
  .route("/")
  .post(authController.protect, postController.createPost)
  .get(postController.getPosts);

router.route("/:id").get(postController.getPost);

module.exports = router;
