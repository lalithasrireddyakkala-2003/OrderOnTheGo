import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// USER ROUTES (require login)
router.post("/", protect, createOrder);              // Place an order
router.get("/my", protect, getUserOrders);           // Get logged-in user's orders
router.get("/:id", protect, getOrderById);           // Get order by ID (only accessible to user who placed it or admin)

// ADMIN ROUTES
router.get("/", protect, isAdmin, getAllOrders);     // Get all orders
router.put("/:id", protect, isAdmin, updateOrder); // Update order status
router.delete("/:id", protect, isAdmin, deleteOrder);    // Delete order

export default router;
