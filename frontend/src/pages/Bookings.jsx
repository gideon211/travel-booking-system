import { useEffect, useState } from "react";
import API from "../api/api";
import BookingCard from "../components/BookingCard";

/**
 * Bookings Page
 */
const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await API.get("/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Bookings</h1>

      {bookings.map((b) => (
        <BookingCard
          key={b._id}
          booking={b}
          refresh={fetchBookings}
        />
      ))}
    </div>
  );
};

export default Bookings;