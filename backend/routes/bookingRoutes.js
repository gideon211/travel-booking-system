import express from "express";
import {
  createBooking,
  getBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

/**
 * POST create booking
 */
router.post("/", createBooking);

/**
 * GET bookings
 */
router.get("/", getBookings);

export default router;