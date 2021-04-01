const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

const connect = require("./models/dbconnect");
connect();
var Post = require("./models/Post");
const User = require("./models/User");
app.use("/public", express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/signup", function (req, res) {
  res.render("signup.ejs");
});

app.delete("/delete", function (req, res) {
  console.log(req.body);
  req.body._id = parseInt(req.body._id);
  Post.deleteOne(req.body, function (err, 결과) {
    console.log("삭제완료");
    res.status(200).send({ message: "성공했습니다." });
  });
});

app.use("/", require("./routes/write.js"));

app.use("/signup", require("./routes/signup.js"));

app.use("/list", require("./routes/list.js"));

app.use("/login", require("./routes/login.js"));

app.listen("3000", function () {
  console.log("listening on 3000");
});
