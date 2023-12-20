const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5500;

app.set("view engine", "ejs");
app.use(bodyParser.text());
app.use(express.json());
app.use(cors());
let id = 1;

let todos = [];

app.get("/todos", (req, res) => {
  res.render("pages/index", { todos });
});

app.post("/todos", (req, res) => {
  const { todo } = req.body;
  const newTodo = [
    ...todos,
    {
      id: id,
      todo: todo,
    },
  ];
  todos = newTodo;
  console.log(todos);
  id++;
  res.sendStatus(200);
});

app.put("/todos/:id", (req, res) => {
  const { updatedTodo } = req.body;
  const { id } = req.params;
  console.log(updatedTodo);

  const newArray = todos.map((task) => {
    if (task.id === parseInt(id)) {
      return { ...task, todo: updatedTodo };
    }
    return task;
  });
  todos = newArray;

  res.sendStatus(200);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todosAfterDelete = todos.filter((todo) => {
    return todo.id != id;
  });
  todos = todosAfterDelete;
  res.sendStatus(200);
});

app.listen(port);
