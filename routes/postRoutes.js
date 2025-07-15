const express = require("express");
const router = express.Router();
const {
  createPost,
  showAllPosts,
  showSinglePost,
  editPost,
  deletePost,
} = require("../controllers/postControllers");

router.route("/").get(showAllPosts).post(createPost);
router.route("/:id").get(showSinglePost).put(editPost).delete(deletePost);

module.exports = router;
