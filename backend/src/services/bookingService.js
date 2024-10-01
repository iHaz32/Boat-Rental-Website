const Booking = require("../database/schemas/bookingSchema");
const { startOfDay, endOfDay, parseISO } = require("date-fns"); // Import date-fns functions for date manipulation

exports.addBooking = async (body) => {
  try {
    const { boatId, fullName, email, phoneNumber, preferredCallTime, date } =
      body;

    // Convert date to a Date object
    const bookingDate = parseISO(date); // Use parseISO to handle date string

    // Set the start and end of the day using date-fns
    const startOfDayDate = startOfDay(bookingDate);
    const endOfDayDate = endOfDay(bookingDate);

    // Check if there's already a booking for the same boat on the same date
    const existingBooking = await Booking.findOne({
      boat: boatId,
      date: {
        $gte: startOfDayDate,
        $lt: endOfDayDate,
      },
    });

    if (existingBooking) {
      // Return error response
      return {
        status: "error",
        message: "This boat is already booked on the selected date.",
      };
    }

    // If no existing booking, create a new one
    const newBooking = new Booking({
      boat: boatId,
      date: bookingDate,
      fullName,
      email,
      phoneNumber,
      preferredCallTime,
    });

    const savedBooking = await newBooking.save();

    // Return success response
    return {
      status: "success",
      message: "Booking successfully added.",
      booking: savedBooking,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message || "Failed to add booking.",
    };
  }
};

exports.getBookings = async (status) => {
  const bookings = await Booking.find(status === "all" ? {} : { status }).populate('boat');

  if (!bookings) {
    throw new Error("Can not load the bookings");
  }
  return bookings;
};

exports.acceptBooking = async (bookingId) => {
  if (!bookingId) {
    throw new Error("Booking ID is required");
  }

  const booking = await Booking.findById(bookingId);
  
  if (!booking) {
    throw new Error("Booking not found");
  }

  booking.status = "accepted";
  await booking.save();

  return booking;
};

exports.rejectBooking = async (bookingId) => {
  if (!bookingId) {
    throw new Error("Booking ID is required");
  }

  const booking = await Booking.findById(bookingId);
  
  if (!booking) {
    throw new Error("Booking not found");
  }

  booking.status = "rejected";
  await booking.save();

  return booking;
};

exports.pendingBooking = async (bookingId) => {
  if (!bookingId) {
    throw new Error("Booking ID is required");
  }

  const booking = await Booking.findById(bookingId);
  
  if (!booking) {
    throw new Error("Booking not found");
  }

  booking.status = "pending";
  await booking.save();

  return booking;
};
