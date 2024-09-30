const express = require('express');
const bookingController = require('../controllers/bookingController');
const router = express.Router();

router.post('/addBooking', bookingController.addBooking);

router.get('/getBookings/:status', bookingController.getBookings);
router.post('/acceptBooking', bookingController.acceptBooking);
router.post('/rejectBooking', bookingController.rejectBooking);
router.post('/pendingBooking', bookingController.pendingBooking);

module.exports = router;