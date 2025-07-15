const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    body: {
      type: String,
      required: true,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
