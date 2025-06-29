// File: src/components/MenuCard.jsx
import React from "react";
import "../css/MenuCard.css";

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-image" />
      <div className="menu-card-content">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <span className="price">₹ {item.price}</span>
          <button className="add-button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
