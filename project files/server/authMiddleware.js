import jwt from "jsonwebtoken";
import { User, Admin } from "../models/schema.js";

// ✅ Rename this from isAuthenticated to protect
export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");
      const admin = await Admin.findById(decoded.id).select("-password");

      if (user) {
        req.user = user;
        req.user.role = "user";
      } else if (admin) {
        req.user = admin;
        req.user.role = "admin";
      } else {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Token invalid", error: error.message });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

// ✅ Keep this as is
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
};
