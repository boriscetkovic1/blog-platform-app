const express = require("express");
const router = express.Router();

const {
  createTag,
  showAllTags,
  showPostsByTag,
} = require("../controllers/tagControllers");

router.post("/", createTag);
router.get("/", showAllTags);
router.get("/:tagId/posts", showPostsByTag);

module.exports = router;
