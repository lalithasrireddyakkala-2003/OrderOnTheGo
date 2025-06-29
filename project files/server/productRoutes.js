import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getAllProducts);            // Get all products
router.get("/:id", getProductById);         // Get product by ID

// PROTECTED ROUTES (Admin only)
router.post("/", protect, isAdmin, createProduct);      // Add new product
router.put("/:id", protect, isAdmin, updateProduct);    // Update product by ID
router.delete("/:id", protect, isAdmin, deleteProduct); // Delete product by ID

export default router;
