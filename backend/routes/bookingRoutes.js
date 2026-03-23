import express from "express";
import {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

/**
 * POST booking
 */
router.post("/", createBooking);

/**
 * GET bookings
 */
router.get("/", getBookings);

/**
 * PUT update booking
 */
router.put("/:id", updateBooking);

/**
 * DELETE booking
 */
router.delete("/:id", deleteBooking);

export default router;