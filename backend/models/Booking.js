import mongoose from "mongoose";

/**
 * Booking Schema
 * Stores user bookings
 */
const bookingSchema = new mongoose.Schema({
  tourId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
  },
  name: String,
  email: String,
  date: String,
});

export default mongoose.model("Booking", bookingSchema);