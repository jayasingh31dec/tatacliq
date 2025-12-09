const Order = require('../models/order');
const Product = require('../models/Product');
const User = require('../models/User');











// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { productId, quantity, address, paymentMethod } = req.body;
   
    console.log('Payment Method from frontend:', paymentMethod);
    const userId = req.user.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }

    if (!address) {
      return res.status(400).json({ message: 'Address is required' });
    }

    const totalPrice = product.price * quantity;

    const newOrder = new Order({
      user: userId,
      products: [
        {
          product: productId,
          quantity
        }
      ],
      totalPrice,
      address,
      paymentMethod: paymentMethod || 'Not Available',
    });


    // ✅ Mark paid if payment is not COD
    if (paymentMethod && paymentMethod.toLowerCase() !== 'cod') {
  newOrder.isPaid = true;
  newOrder.paidAt = new Date();
  console.log('Order with paidAt:', newOrder);

}


    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error('Create Order Error:', err);
    res.status(500).json({ message: 'Error creating order', error: err.message });
  }
};


// Get orders for logged-in user
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).populate('products.product', 'name price image');
    res.status(200).json(orders);
  } catch (err) {
    console.error('Get User Orders Error:', err);
    res.status(500).json({ message: 'Error fetching orders', error: err.message });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name price image')

    res.status(200).json(orders);
  } catch (err) {
    console.error('Get All Orders Error:', err);
    res.status(500).json({ message: 'Error fetching all orders', error: err.message });
  }
};







exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate('user', 'name email')
      .populate('products.product', 'name price image');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // only owner can see it
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching order', error: err.message });
  }
};
