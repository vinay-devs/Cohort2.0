const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
const { User } = require("./db/db");

app.use(cors());
app.use(express.json());

app.get("/cards", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

// description: String,
// Interest_1: String,
// Interest_2: String,
// Interest_3: String,
// LinkedIn: String,
// Twitter: String,
app.post("/add", async (req, res) => {
  const data = req.body.userData;
  const {
    Name,
    description,
    Interest_1,
    Interest_2,
    Interest_3,
    LinkedIn,
    Twitter,
  } = data;
  console.log(Name);

  const success = await User.create({
    Name: Name,
    description: description,
    Interest_1: Interest_1,
    Interest_2: Interest_2,
    Interest_3: Interest_3,
    LinkedIn: LinkedIn,
    Twitter: Twitter,
  });
  console.log(success);
  res.json(success);
});

app.listen(port, () => console.log(`connected to ${port}`));
