const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vinaydevs:jqF-phGAETG_W6F@cluster0.rdf1mnc.mongodb.net/course_selling_app"
  )
  .then(() => console.log("Connected to Db"))
  .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = { Todo };
