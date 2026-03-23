import { useState } from "react";
import API from "../api/api";

/**
 * Booking Page
 */
const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    tourId: "",
  });

  /**
   * Handle form change
   */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Submit booking
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/bookings", form);
    alert("Booking successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="tourId" placeholder="Tour ID" onChange={handleChange} />

      <button type="submit">Book Tour</button>
    </form>
  );
};

export default Booking;