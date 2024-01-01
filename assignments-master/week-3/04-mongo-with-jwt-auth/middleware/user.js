const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_KEY;

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const response = jwt.verify(token, jwtSecret);
    if (response) {
      next();
    } else {
      res.json({ message: "Authentication Failed" });
    }
  } catch (err) {
    res.json({ message: "Authentication Token missing " });
  }
}

module.exports = userMiddleware;
