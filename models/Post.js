var mongoose = require("mongoose");

// schema
const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    ref: "User",
  },
  // comment: {
  //   type: String,
  //   required: true,
  // },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
