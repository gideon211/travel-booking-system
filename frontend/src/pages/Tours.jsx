import { useEffect, useState } from "react";
import { getTours } from "../api/tours";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        setTours(data);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p>Loading tours...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {tours.map((tour) => (
        <div key={tour._id} className="border p-3 rounded">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-40 object-cover"
          />
          <h2 className="text-lg font-bold">{tour.title}</h2>
          <p>{tour.location}</p>
          <p>${tour.price}</p>
        </div>
      ))}
    </div>
  );
}