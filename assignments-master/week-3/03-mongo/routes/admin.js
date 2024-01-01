const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");
const { Admin, Course } = require("../db/index");

const userNameSchema = zod
  .string()
  .email({ message: "userName should be email" });
const passwordSchema = zod.string().min(5);
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    userNameSchema.parse(username);
    passwordSchema.parse(password);
  } catch (error) {
    res.json({
      message:
        "username should be email and password should be more than 5 char",
    });
  }

  Admin.findOne({ userName: username, password: password }).then((val) => {
    if (val) res.json({ message: "Admin is already exists" });
  });

  try {
    Admin.create({
      userName: username,
      password: password,
    }).then(() => {
      res.json({ message: "Admin created successfully" });
    });
  } catch (err) {
    res.json({ message: "Error while adding to database" });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  }).then((val) => {
    res.json({ message: "Course created successfully", courseId: val._id });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((val) => {
    res.json(val);
  });
});

module.exports = router;
