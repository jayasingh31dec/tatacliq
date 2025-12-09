const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const { protect, protectAdmin } = require('../middleware/authMiddleware');
const { getUserOrders } = require('../controllers/orderController');
// const { getOrderById } = require('../controllers/orderController');

// 📦 Create new order (only for logged-in users)
router.post('/', protect, async (req, res) => {
  try {
    const newOrder = new Order({
      ...req.body,
      user: req.user.id, // ✅ Set the logged-in user ID
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get all orders (admin only)
router.get('/', protectAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name price brand');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👤 Get logged-in user's orders

router.get('/my', protect, getUserOrders);


// 👤 Get logged-in user's single order by ID

// router.get('/:orderId', protect, getOrderById);







// 📦 Get a single order by ID (user only)
router.get('/:orderId', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate('products.product', 'name price image');
      
    if (!order) return res.status(404).json({ message: 'Order not found' });

    // ✅ Check if the logged-in user owns the order (important security step)
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching order', error: err.message });
  }
});












module.exports = router;
