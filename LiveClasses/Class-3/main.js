const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vinaydevs:jqF-phGAETG_W6F@cluster0.rdf1mnc.mongodb.net/user_app"
);

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "vinaydevs",
  email: "vinaydevs@gmail.com",
  password: "1234556",
});

user.save();
