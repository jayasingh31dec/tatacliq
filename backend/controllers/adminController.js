const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const Order = require('../models/order');



// Admin Registration
const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully', admin: newAdmin });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Admin Login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Fallback secret key for testing if .env not configured
    const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

    const token = jwt.sign(
      {
        adminId: admin._id,
        isAdmin: true, // ✅ this makes protectAdmin work
      },
      jwtSecret,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: {
        _id: admin._id,
        email: admin.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Controller: Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name price image brand'); // ✅ brand added too

    res.status(200).json(orders);
  } catch (err) {
    console.error('Failed to fetch orders:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};






const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;


    //Push new status to statusHistory
    order.statusHistory.push({
      status: status,
      date: new Date()
    });


    await order.save();

    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: 'Failed to update status', error: error.message });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
  getAllOrders,
  updateOrderStatus, // ⬅️ Export this too
};




















