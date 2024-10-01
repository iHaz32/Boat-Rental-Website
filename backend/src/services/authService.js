const bcrypt = require("bcrypt");
const Admin = require("../database/schemas/adminSchema");
const { generateToken } = require("../utils/jwt");
const { validateLogin } = require("../utils/validateLogin");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    await validateLogin(username, password);

    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(admin._id);

    return token;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};
