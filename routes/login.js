const express = require("express");
const User = require("../models/User"); // User model 불러오기
const router = express.Router(); // express의 Router 사용
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

router.get("/", function (req, res) {
  res.render("login.ejs");
});

router.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);
router.use(passport.initialize());
router.use(passport.session());

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  function (req, res) {
    res.redirect("/");
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
      session: true,
      passReqToCallback: false,
    },
    function (입력한아이디, 입력한비번, done) {
      console.log(입력한아이디, 입력한비번);
      User.findOne({ name: 입력한아이디 }, function (err, res) {
        if (err) return done(err);

        if (!res)
          return done(null, false, { message: "존재하지않는 아이디요" });
        if (입력한비번 == res.password) {
          return done(null, res);
        } else {
          return done(null, false, { message: "비번틀렸어요" });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (아이디, done) {
  done(null, {});
});

router.use(express.json({ extended: false }));

module.exports = router;
