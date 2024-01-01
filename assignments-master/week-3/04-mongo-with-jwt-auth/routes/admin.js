const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");
const { Admin, Course } = require("../db/index");
const userNameSchema = zod.string().email();
const passwordSchema = zod.string().min(5);
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_KEY;

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    userNameSchema.parse(username);
    passwordSchema.parse(password);
  } catch (err) {
    res.json({ message: "Something wrong with username or password" });
  }

  Admin.create({
    userName: username,
    password: password,
  }).then((val) => {
    if (val) res.json({ message: "Admin created Succesfully" });
    else res.status(403).json({ message: "Admin is not created" });
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    userNameSchema.parse(username);
  } catch (error) {
    res.json({ message: "Type a valid userName" });
  }
  Admin.findOne({
    userName: username,
    password: password,
  }).then((val) => {
    if (!val) {
      res.json({ message: "Admin not found" });
      return;
    }
    const token = jwt.sign({ username, password }, jwtSecret);
    res.json(token);
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;
  Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  }).then((val) => {
    if (val) {
      res.json({ message: "Course created successfully", courseId: val._id });
    } else {
      res.json({ message: "Course is not Added" });
    }
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
