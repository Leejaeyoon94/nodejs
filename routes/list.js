const router = require("express").Router();

const Post = require("../models/Post");
const User = require("../models/User");
router.get("/", async function (req, res) {
  // console.log(req.title);
  const post = await Post.find({});
  const user = await User.find({});
  console.log(post, user);

  res.render("list.ejs", { post: post, user: user });
});

// router.get('/list/:', function (req, res) {
//   Post.findOne({title: req.params.title})
// })
module.exports = router;
