const Tag = require("../models/tagModel");
const Post = require("../models/postModel");

const createTag = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Tag name is required" });
    }

    const wordCount = name.trim().split(/\s+/).length;
    if (wordCount > 2) {
      return res
        .status(400)
        .json({ error: "Tag name can't have more than two words" });
    }

    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return res
        .status(400)
        .json({ error: "Tag with this name already exists" });
    }

    const newTag = new Tag({ name });
    await newTag.save();

    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showPostsByTag = async (req, res) => {
  try {
    const { tagId } = req.params;
    const posts = await Post.find({ tags: tagId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTag,
  showAllTags,
  showPostsByTag,
};
