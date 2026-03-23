import { useEffect, useState } from "react";
import API from "../api/api";
import TourCard from "../components/TourCard";

/**
 * Home Page
 */
const Home = () => {
  const [tours, setTours] = useState([]);

  /**
   * Fetch tours
   */
  const fetchTours = async () => {
    const res = await API.get("/tours");
    setTours(res.data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <h1>Tours</h1>

      {tours.map((tour) => (
        <TourCard
          key={tour._id}
          tour={tour}
          refresh={fetchTours}
        />
      ))}
    </div>
  );
};

export default Home;