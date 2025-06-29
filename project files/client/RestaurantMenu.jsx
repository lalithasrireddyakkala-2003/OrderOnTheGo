import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./RestaurantMenu.css";

const menuData = {
  "andhra-spice": [
    { name: "Andhra Chicken Curry", price: 250, image: "/images/andhra-chicken.jpg" },
    { name: "Gongura Mutton", price: 300, image: "/images/gongura-mutton.jpg" },
    { name: "Pulihora", price: 150, image: "/images/pulihora.jpg" },
    { name: "Chepala Pulusu", price: 280, image: "/images/chepala-pulusu.jpg" },
    { name: "Royyala Vepudu", price: 320, image: "/images/royyala-vepudu.jpg" },
    { name: "Pesarattu", price: 100, image: "/images/pesarattu.jpg" },
    { name: "Paradise Special Biryani", price: 320, image: "/images/paradise-biryani.jpg" },
    { name: "Chicken 65", price: 180, image: "/images/chicken-65.jpg" },
    { name: "Gajar Ka Halwa", price: 90, image: "/images/gajar-ka-halwa.jpg" },
    { name: "Paneer Tikka", price: 250, image: "/images/paneer-tikka.jpg" },
    { name: "Malai Kofta", price: 270, image: "/images/malai-kofta.jpg" },
    { name: "Hyderabadi Mutton Dum Biryani", price: 400, image: "/images/hyd-mutton-biryani.jpg" }
  ],

  "the-spicy-venue": [
    { name: "Paneer Butter Masala", price: 200, image: "/images/paneer-butter-masala.jpg" },
    { name: "Spicy Veg Biryani", price: 220, image: "/images/veg-biryani.jpg" },
    { name: "Tandoori Chicken", price: 280, image: "/images/tandoori-chicken.jpg" },
    { name: "Mutton Rogan Josh", price: 350, image: "/images/mutton-rogan-josh.jpg" },
    { name: "Chicken Pakodi", price: 180, image: "/images/chicken-pakodi.jpg" },
    { name: "Prawn Masala", price: 330, image: "/images/prawn-masala.jpg" },
     { name: "Amritsari Kulcha", price: 120, image: "/images/amritsari-kulcha.jpg" },
    { name: "Butter Chicken", price: 250, image: "/images/butter-chicken.jpg" },
    { name: "Lassi", price: 60, image: "/images/lassi.jpg" },
    { name: "Chole Bhature", price: 150, image: "/images/chole-bhature.jpg" },
    { name: "Sarson Da Saag", price: 190, image: "/images/sarson-saag.jpg" },
    { name: "Paneer Lababdar", price: 260, image: "/images/paneer-lababdar.jpg" },
    { name: "Paneer Tikka", price: 220, image: "/images/paneer-tikka.jpg" },
    { name: "Fish Fry", price: 320, image: "/images/fish-fry.jpg" }
  ],

  "paradise-grand": [
    { name: "Paradise Special Biryani", price: 320, image: "/images/paradise-biryani.jpg" },
    { name: "Chicken 65", price: 180, image: "/images/chicken-65.jpg" },
    { name: "Gajar Ka Halwa", price: 90, image: "/images/gajar-ka-halwa.jpg" },
    { name: "Paneer Tikka", price: 250, image: "/images/paneer-tikka.jpg" },
    { name: "Malai Kofta", price: 270, image: "/images/malai-kofta.jpg" },
    { name: "Hyderabadi Mutton Dum Biryani", price: 400, image: "/images/hyd-mutton-biryani.jpg" },
    { name: "Paneer Butter Masala", price: 200, image: "/images/paneer-butter-masala.jpg" },
    { name: "Spicy Veg Biryani", price: 220, image: "/images/veg-biryani.jpg" },
    { name: "Tandoori Chicken", price: 280, image: "/images/tandoori-chicken.jpg" },
    { name: "Mutton Rogan Josh", price: 350, image: "/images/mutton-rogan-josh.jpg" },
    { name: "Chicken Pakodi", price: 180, image: "/images/chicken-pakodi.jpg" },
    { name: "Prawn Masala", price: 330, image: "/images/prawn-masala.jpg" }
  ],

  "real-deepak-punjabi-dhaba": [
    { name: "Amritsari Kulcha", price: 120, image: "/images/amritsari-kulcha.jpg" },
    { name: "Butter Chicken", price: 250, image: "/images/butter-chicken.jpg" },
    { name: "Lassi", price: 60, image: "/images/lassi.jpg" },
    { name: "Chole Bhature", price: 150, image: "/images/chole-bhature.jpg" },
    { name: "Sarson Da Saag", price: 190, image: "/images/sarson-saag.jpg" },
    { name: "Paneer Lababdar", price: 260, image: "/images/paneer-lababdar.jpg" },
    { name: "Paneer Tikka", price: 220, image: "/images/paneer-tikka.jpg" },
    { name: "Fish Fry", price: 320, image: "/images/fish-fry.jpg" },
    { name: "Grilled Prawns", price: 420, image: "/images/grilled-prawns.jpg" },
    { name: "Veg Kebab Platter", price: 350, image: "/images/veg-kebab.jpg" },
    { name: "Chicken Wings", price: 290, image: "/images/chicken-wings.jpg" }
  ],

  "sri-sairam-parlour": [
    { name: "Idli", price: 40, image: "/images/idli.jpg" },
    { name: "Dosa", price: 60, image: "/images/dosa.jpg" },
    { name: "Vada", price: 50, image: "/images/vada.jpg" },
    { name: "Upma", price: 55, image: "/images/upma.jpg" },
    { name: "Poori", price: 70, image: "/images/poori.jpg" },
    { name: "Rava Kesari", price: 80, image: "/images/rava-kesari.jpg" },
    { name: "Andhra Chicken Curry", price: 250, image: "/images/andhra-chicken.jpg" },
    { name: "Gongura Mutton", price: 300, image: "/images/gongura-mutton.jpg" },
    { name: "Pulihora", price: 150, image: "/images/pulihora.jpg" },
    { name: "Chepala Pulusu", price: 280, image: "/images/chepala-pulusu.jpg" },
    { name: "Royyala Vepudu", price: 320, image: "/images/royyala-vepudu.jpg" },
    { name: "Pesarattu", price: 100, image: "/images/pesarattu.jpg" }
  ],

  "barbeque-nation": [
    { name: "BBQ Grill Combo", price: 599, image: "/images/bbq-grill.jpg" },
    { name: "Paneer Tikka", price: 220, image: "/images/paneer-tikka.jpg" },
    { name: "Fish Fry", price: 320, image: "/images/fish-fry.jpg" },
    { name: "Grilled Prawns", price: 420, image: "/images/grilled-prawns.jpg" },
    { name: "Veg Kebab Platter", price: 350, image: "/images/veg-kebab.jpg" },
    { name: "Chicken Wings", price: 290, image: "/images/chicken-wings.jpg" },
    { name: "Paneer Butter Masala", price: 200, image: "/images/paneer-butter-masala.jpg" },
    { name: "Spicy Veg Biryani", price: 220, image: "/images/veg-biryani.jpg" },
    { name: "Tandoori Chicken", price: 280, image: "/images/tandoori-chicken.jpg" },
    { name: "Mutton Rogan Josh", price: 350, image: "/images/mutton-rogan-josh.jpg" },
    { name: "Chicken Pakodi", price: 180, image: "/images/chicken-pakodi.jpg" },
    { name: "Prawn Masala", price: 330, image: "/images/prawn-masala.jpg" }
  ]
};


const RestaurantMenu = () => {
  const { restaurantSlug } = useParams();
  const menu = menuData[restaurantSlug] || [];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add to Cart Function
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, restaurant: restaurantSlug });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Menu</h2>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      <input
        type="text"
        placeholder="Search items..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredMenu.length === 0 ? (
        <p>No matching items found.</p>
      ) : (
        <div className="menu-grid">
          {filteredMenu.map((item, index) => (
            <div key={index} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-img" />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button className="add-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
