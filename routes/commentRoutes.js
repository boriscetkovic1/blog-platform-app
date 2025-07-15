const express = require("express");
const router = express.Router();

const {
  addComment,
  editComment,
  deleteComment,
} = require("../controllers/commentControllers");

router.post("/:postId/comments", addComment);
router.put("/:commentId", editComment);
router.delete("/:commentId", deleteComment);

module.exports = router;
