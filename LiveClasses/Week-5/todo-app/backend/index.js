const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const payLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(payLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ message: "You sent the wrong inputs" });
  }
  await Todo.create({
    title: payLoad.title,
    description: payLoad.description,
    completed: false,
  });

  res.json({
    message: "Todo is created",
  });
});
app.get("/todos", async (req, res) => {
  const todo = await Todo.find({});
  res.json({ todo });
});
app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ message: "You sent the wrong id" });
  }
  await Todo.updateOne({ _id: updatePayLoad }, { completed: true });

  res.json({
    message: "Todo marked as Completed",
  });
});
app.listen(5001, () => {
  console.log(`connected to 5001`);
});
