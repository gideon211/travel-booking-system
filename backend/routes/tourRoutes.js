import express from "express";
import { getTours, createTour } from "../controllers/tourController.js";

const router = express.Router();

/**
 * GET all tours
 */
router.get("/", getTours);

/**
 * POST create tour
 */
router.post("/", createTour);

export default router;