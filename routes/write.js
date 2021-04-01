const router = require("express").Router();
var Post = require("../models/Post");
// function 로그인했니(요청, 응답, next) {
//   if (요청.user) {
//     next();
//   } else {
//     응답.send("로그인 하세요!");
//   }
// }

router.get("/write", function (req, res) {
  res.render("write.ejs");
});

router.post("/write", function (req, res) {
  Post.create(req.body, function (err, user) {
    if (err) return res.json(err);
    res.redirect("/");
  });
});

// 할일,날짜를 받는다

module.exports = router;

//  로그인했니,
