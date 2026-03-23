import express from "express";
import { getTours, createTour, updateTour, deleteTour } from "../controllers/tourController.js";

const router = express.Router();

/**
 * GET all tours
 */
router.get("/", getTours);

/**
 * POST create tour
 */
router.post("/", createTour);

/**
 * PUT update tour
 */
router.put("/:id", updateTour);

/**
 * DELETE tour
 */
router.delete("/:id", deleteTour);


export default router;