import { useState } from "react";
import API from "../api/api";
import Modal from "./Modal";

/**
 * Booking Card Component
 */
const BookingCard = ({ booking, refresh }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: booking.name,
    email: booking.email,
    date: booking.date,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Update booking
   */
  const handleUpdate = async () => {
    await API.put(`/bookings/${booking._id}`, form);
    setIsOpen(false);
    refresh();
  };

  /**
   * Delete booking
   */
  const handleDelete = async () => {
    await API.delete(`/bookings/${booking._id}`);
    refresh();
  };

  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{booking.name}</h3>
      <p>{booking.email}</p>
      <p>{booking.date}</p>

      <button onClick={() => setIsOpen(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Edit Booking</h2>

        <input name="name" value={form.name} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="date" value={form.date} onChange={handleChange} />

        <button onClick={handleUpdate}>Save</button>
      </Modal>
    </div>
  );
};

export default BookingCard;