const express = require("express");
const router = express.Router();

// 로그인
router.post("/login", (req, res) => {
  return res.status(201).json({
    msg: "signin success",
  });
});

// 회원가입
router.post("/signup", (req, res) => {
  return res.status(201).json({
    msg: "signup success",
  });
});

// 로그인 실패시 새로고침 페이지
router.get("/fail", (req, res) => {
  return res.status(200).json({
    msg: "login fail",
  });
});

module.exports = router;
