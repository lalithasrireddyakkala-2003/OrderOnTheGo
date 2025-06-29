import { Order } from "../models/schema.js";

// ✅ Create a New Order
export const createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    if (!userId || !products || !products.length || !totalAmount) {
      return res.status(400).json({ message: "Missing order data" });
    }

    const newOrder = new Order({
      userId,
      products,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Error creating order", error: err.message });
  }
};

// ✅ Get All Orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("products.productId", "name price");

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
};

// ✅ Get a Single Order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("userId", "name email")
      .populate("products.productId", "name price");

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error fetching order", error: err.message });
  }
};

// ✅ Update an Order (e.g., status change)
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating order", error: err.message });
  }
};

// ✅ Delete an Order
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting order", error: err.message });
  }
};

// ✅ Get Orders for a Specific User
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.find({ userId })
      .populate("products.productId", "name price");

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to get user orders", error: err.message });
  }
};
