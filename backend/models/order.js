const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },








  paymentMethod: { type: String, default: 'Not Available' },
  isPaid: { type: Boolean, default: false },
  paidAt: {
  type: Date,
  default: null
},









  

  

  status: {
    type: String,
    default: 'pending',
        enum: ['pending', 'shipped', 'out-for-delivery', 'delivered']
  },




   // ✅ NEW FIELD: statusHistory
  statusHistory: [
    {
      status: {
        type: String,
        enum: ['pending', 'shipped', 'out-for-delivery', 'delivered']
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  
  createdAt: {
    type: Date,
    default: Date.now
  },











  
});

module.exports = mongoose.model('Order', orderSchema);
