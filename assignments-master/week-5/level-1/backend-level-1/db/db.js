const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://vinaydevs:jqF-phGAETG_W6F@cluster0.rdf1mnc.mongodb.net/BusinessCard"
  )
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const UserSchema = new Schema({
  Name: String,
  description: String,
  Interest_1: String,
  Interest_2: String,
  Interest_3: String,
  LinkedIn: String,
  Twitter: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
