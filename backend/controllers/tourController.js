import Tour from "../models/Tour.js";

/**
 * Get all tours
 */
export const getTours = async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
};

/**
 * Create a tour (for admin/testing)
 */
export const createTour = async (req, res) => {
  const tour = new Tour(req.body);
  await tour.save();
  res.json(tour);
};