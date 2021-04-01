const router = require("express").Router();

function 로그인했니(요청, 응답, next) {
  if (요청.user) {
    next();
  } else {
    응답.send("로그인 하세요!");
  }
}

module.exports = router;
