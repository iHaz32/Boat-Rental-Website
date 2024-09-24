const authService = require('../services/authService');

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req, res);
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
