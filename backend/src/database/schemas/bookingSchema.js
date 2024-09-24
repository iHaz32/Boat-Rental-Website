const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    boat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Boat",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    preferredCallTime: {
      type: String,
      enum: ["morning", "afternoon", "evening", "night"],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
