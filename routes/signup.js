const express = require("express");
const User = require("../models/User"); // User model 불러오기
const router = express.Router(); // express의 Router 사용
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
  const { name, password, confirmPassword } = req.body;
  console.log(req.body);

  try {
    if (password !== confirmPassword) {
      res.send(
        '<script type="text/javascript">alert("비밀번호가 달라요."); window.location="/signup"; </script>'
      );
      return;
    }
    // email을 비교하여 user가 이미 존재하는지 확인
    let user = await User.findOne({ $or: [{ name }] });
    if (user) {
      res.send(
        '<script type="text/javascript">alert("닉네임 중복"); window.location="/signup"; </script>'
      );
      return;
    }

    // user에 name, email, password 값 할당
    user = new User({
      name,
      password,
      confirmPassword,
    });

    // password를 암호화 하기
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.confirmPassword = await bcrypt.hash(confirmPassword, salt);
    await user.save(); // db에 user 저장

    res.send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
