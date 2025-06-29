import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

// Helper function to create slug from restaurant name
const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

const categories = [
  { name: "Breakfast", image: "/images/breakfast.jpg" },
  { name: "Biryani", image: "/images/biryani.jpg" },
  { name: "Pizza", image: "/images/pizza.jpg" },
  { name: "Noodles", image: "/images/noodles.jpg" },
  { name: "Burger", image: "/images/burger.jpg" },
];

const restaurants = [
  { name: "Andhra Spice", location: "Beach Road, Visakhapatnam", image: "/images/andhra.jpg" },
  { name: "The Spicy Venue", location: "Siripuram, Visakhapatnam", image: "/images/spicy.jpg" },
  { name: "Paradise Grand", location: "Ram Nagar, Visakhapatnam", image: "/images/paradise.jpg" },
  { name: "Real Deepak Punjabi Dhaba", location: "Sanjeeviah Nagar, Visakhapatnam", image: "/images/punjabi.jpg" },
  { name: "Sri Sairam Parlour", location: "Dwarakanagar, Visakhapatnam", image: "/images/minerva.jpg" },
  { name: "Barbeque Nation", location: "Waltair, Visakhapatnam", image: "/images/barbeque.jpg" },
];

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="container">
        <header className="navbar">
          <h2 className="brand">SB Foods</h2>
          <input className="search" type="text" placeholder="Search Restaurants, cuisine, etc." />
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
            <Link to="/cart" className="cart-link">🛒 Cart</Link>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-content">
            <h1>Delicious Food, Delivered Fast</h1>
            <p>Explore top dishes and popular restaurants near you</p>
            <a href="#categories" className="get-started-btn">Get Started</a>
          </div>
        </section>

        <section className="section" id="categories">
          <h3>Popular Categories</h3>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <div key={i} className="category-card">
                <img src={cat.image} alt={cat.name} />
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>All Restaurants</h3>
          <div className="restaurant-grid">
            {restaurants.map((rest, i) => (
              <Link 
                key={i} 
                to={`/restaurant/${slugify(rest.name)}`} 
                className="restaurant-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={rest.image} alt={rest.name} />
                <h4>{rest.name}</h4>
                <p>{rest.location}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
