const bookingService = require("../services/bookingService");

exports.addBooking = async (req, res) => {
  try {
    const response = await bookingService.addBooking(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const status = req.params.status;
    const response = await bookingService.getBookings(status);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.acceptBooking = async (req, res) => {
  try {
    const response = await bookingService.acceptBooking(req.body.bookingId);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.rejectBooking = async (req, res) => {
  try {
    const response = await bookingService.rejectBooking(req.body.bookingId);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.pendingBooking = async (req, res) => {
  try {
    const response = await bookingService.pendingBooking(req.body.bookingId);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};