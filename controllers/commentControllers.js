const Comment = require("../models/commentModel");

const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { body } = req.body;

    if (!body) {
      return res.status(400).json({ error: "Comment body is required" });
    }

    const newComment = new Comment({ postId, body });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { body } = req.body;

    if (!body || body.length > 200) {
      return res.status(400).json({
        error: "A comment is required and must be under 200 characters",
      });
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { body },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addComment, editComment, deleteComment };
