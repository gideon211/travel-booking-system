import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings"
import Tours from "./pages/Tours";
/**
 * Main App Component
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;