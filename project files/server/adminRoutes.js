import express from "express";
import { getAllAdmins, createAdmin } from "../controllers/adminController.js";
import { loginAdmin } from "../controllers/adminAuthController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin registration
router.post("/", createAdmin);

// Admin login
router.post("/login", loginAdmin);

// Get all admins (only allowed for logged-in admins)
router.get("/", protect, isAdmin, getAllAdmins);

export default router;
