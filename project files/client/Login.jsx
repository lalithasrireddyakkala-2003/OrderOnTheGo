import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Make sure this is your updated CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear error before new attempt

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data) {
        alert("Login Successful!");
        // You can navigate to dashboard or home page here
      }
    } catch (err) {
      setError("Login Failed! Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
