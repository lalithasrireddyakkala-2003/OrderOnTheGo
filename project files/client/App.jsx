import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantMenu from "./pages/RestaurantMenu";
import Cart from "./pages/Cart"; // ✅ New

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant/:restaurantSlug" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} /> {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
