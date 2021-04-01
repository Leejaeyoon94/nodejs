const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/test2", {
      // .connect("mongodb://localhost:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      ignoreUndefined: true,
      // user: "test",
      // pass: "test",
    })
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러입니다.", err);
});

module.exports = connect;

// const MongoClient = require("mongodb").MongoClient;
// var db;
// MongoClient.connect(
//   "mongodb+srv://uon10:1234@cluster0.mr5iq.mongodb.net/todoapp?retryWrites=true&w=majority",
//   { useUnifiedTopology: true },
//   function (err, client) {
//     if (err) return console.log(err);

//     db = client.db("todoapp");

//   }
// );
