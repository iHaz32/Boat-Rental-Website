const boatsService = require('../services/boatsService');

exports.getAllPreview = async (req, res) => {
    try {
      const boats = await boatsService.getAllPreview();
      res.status(201).json(boats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getBoat = async (req, res) => {
  try {
    const slug = req.params.slug;
    const boat = await boatsService.getBoat(slug);
    res.status(201).json(boat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};