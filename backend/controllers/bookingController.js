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

/**
 * Update booking
 */
export const updateBooking = async (req, res) => {
  const updated = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

/**
 * Delete booking
 */
export const deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);

  res.json({ message: "Booking deleted" });
};