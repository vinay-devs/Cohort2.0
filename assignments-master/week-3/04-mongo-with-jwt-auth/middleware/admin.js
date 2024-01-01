// Middleware for handling auth
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET_KEY;

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;
