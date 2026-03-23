import Booking from "../models/Booking.js";

/**
 * Create booking
 */
export const createBooking = async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
};

/**
 * Get all bookings
 */
export const getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("tourId");
  res.json(bookings);
};