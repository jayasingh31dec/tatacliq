const express = require('express');
const router = express.Router();
const { protectAdmin } = require('../middleware/authMiddleware'); // adjust path if needed
const { updateOrderStatus } = require('../controllers/adminController'); 
const Order = require('../models/order');

const {
  loginAdmin,
  registerAdmin,
  getAllOrders,
} = require('../controllers/adminController');

// You can apply protect/isAdmin middleware here if available
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// ✅ Admin fetch all orders
// router.get('/orders', getAllOrders); // Add auth middleware if needed
router.get("/orders", protectAdmin, getAllOrders);




router.put("/orders/:orderId/status", protectAdmin, updateOrderStatus);










// ✅ Admin: Get single order by ID
router.get("/orders/:orderId", protectAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate("user", "name email")
      .populate("products.product", "name price image brand");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});









module.exports = router;
