import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p className="cart-restaurant">From: {item.restaurant.replace(/-/g, " ")}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalAmount}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
