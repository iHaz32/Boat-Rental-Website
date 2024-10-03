const validateLogin = async (username, password) => {
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    throw new Error("Invalid credentials");
  }
};

module.exports = {
  validateLogin,
};
