import { useState } from "react";
import API from "../api/api";
import Modal from "./Modal";

/**
 * Tour Card Component
 */
const TourCard = ({ tour, refresh }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    title: tour.title,
    location: tour.location,
    price: tour.price,
  });

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Update tour
   */
  const handleUpdate = async () => {
    await API.put(`/tours/${tour._id}`, form);
    setIsOpen(false);
    refresh(); // refetch tours
  };

  /**
   * Delete tour
   */
  const handleDelete = async () => {
    await API.delete(`/tours/${tour._id}`);
    refresh();
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>{tour.title}</h3>
      <p>{tour.location}</p>
      <p>${tour.price}</p>

      <button onClick={() => setIsOpen(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Edit Tour</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <button onClick={handleUpdate}>Save</button>
      </Modal>
    </div>
  );
};

export default TourCard;