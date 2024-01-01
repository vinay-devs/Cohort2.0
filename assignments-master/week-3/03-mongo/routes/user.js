const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod");
const { User, Course } = require("../db");

const userNameSchema = zod
  .string()
  .email({ message: "userName should be email" });
const passwordSchema = zod.string().min(5);
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
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
  User.findOne({ userName: username, password: password }).then((val) => {
    if (val) res.json({ message: "User is already exists" });
  });

  try {
    User.create({
      userName: username,
      password: password,
    }).then((val) => {
      if (val) {
        res.json({ message: "User created successfully" });
      } else {
        res.json({ message: "Error while creating User" });
      }
    });
  } catch (err) {
    res.status(403).json({ message: "Database is not communicating well" });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((val) => {
    if (val) {
      res.json(val);
    } else {
      res.json({ message: "No Courses found" });
    }
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  try {
    User.updateOne(
      {
        userName: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    ).then((val) => {
      res.json(val);
    });
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({
    userName: username,
  });
  const courses = await Course.find({
    _id: { $in: user.purchasedCourses },
  });
  res.json(courses);
});

module.exports = router;
