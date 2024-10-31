const mongoose = require("mongoose");
// import module moongoose unique validators
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type :String,unique : true},
  pwd: String,
  role : String,
  avatar : String, // File Path
});
userSchema.plugin(uniqueValidator);
//affect userSchema to user Model Name
const user = mongoose.model("User", userSchema);
//export user
module.exports = user;
