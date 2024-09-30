const express = require('express');
const boatsController = require('../controllers/boatsController');
const router = express.Router();

router.get('/getAllPreview', boatsController.getAllPreview);
router.get('/:slug', boatsController.getBoat);

module.exports = router;