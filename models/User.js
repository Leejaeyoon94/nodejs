var mongoose = require("mongoose");

// schema
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});
// userSchema.virtual("userId").get(function () {
//   return this._id.toHexString();
// });
// userSchema.set("toJSON", {
//   virtuals: true,
// });
const User = mongoose.model("user", userSchema);
module.exports = User;
