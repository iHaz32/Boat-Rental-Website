const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  try {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  } catch {
    throw new Error("Authentication error");
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new Error("Authorization error");
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
