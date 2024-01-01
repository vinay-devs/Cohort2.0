const { Router } = require("express");
const router = Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtSecret = process.env.JWT_SECRET_KEY;

const userNameSchema = zod.string().email();
const passwordSchema = zod.string().min(5);
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  try {
    userNameSchema.parse(username);
    passwordSchema.parse(password);
  } catch (err) {
    res.json({ message: "Check you Username and Password" });
  }

  User.findOne({ userName: username }).then((val) => {
    if (val) {
      res.json({ message: "User Name is already Exist" });
    }
  });

  User.create({
    userName: username,
    password: password,
  }).then((val) => {
    if (val) {
      res.json({ message: "User is created Succesfully" });
    } else {
      res.json({ message: "User creation failed" });
    }
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    userNameSchema.parse(username);
  } catch (error) {
    res.json({ message: "Username should be email" });
  }

  User.findOne({ userName: username, password: password }).then((val) => {
    if (!val) {
      res.json({ message: "User doesn't Exist.Signup Before Login" });
    } else {
      const token = jwt.sign({ username, password }, jwtSecret);
      res.json(token);
    }
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((val) => {
    res.json(val);
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const decode = jwt.decode(token);
  const courseId = req.params.courseId;

  const data = await User.updateOne(
    {
      userName: decode.username,
      password: decode.password,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  );
  res.json(data);
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const decode = jwt.decode(token);

  const user = await User.findOne({
    userName: decode.username,
    password: decode.password,
  });

  try {
    const courses = await Course.find({
      _id: { $in: user.purchasedCourses },
      published: true,
    });
    res.json(courses);
  } catch (err) {
    res.json({ message: "No course Purchased" });
  }
});

module.exports = router;
