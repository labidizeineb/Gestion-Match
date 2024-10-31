// import mongoose module
const mongoose = require("mongoose");
//stadium schema
const stadiumSchema = mongoose.Schema({
  name: String,
  team: String,
  country : String,
  city : String,
  capacity: Number,
});
//affect stadiumSchema to stadium Model Name
const stadium = mongoose.model("Stadium", stadiumSchema);
//export stadium
module.exports = stadium;