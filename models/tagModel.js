const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return v.trim().split(/\s+/).length <= 2;
        },
        message: "Tag name must be max 2 words",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", tagSchema);
