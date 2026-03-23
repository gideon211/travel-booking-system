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

/**
 * Update a tour
 */
export const updateTour = async (req, res) => {
  const updated = await Tour.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};


/**
 * Delete a tour
 */
export const deleteTour = async (req, res) => {
  await Tour.findByIdAndDelete(req.params.id);

  res.json({ message: "Tour deleted" });
};