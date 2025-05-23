const mongoose = require('mongoose');

const giftCardSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // e.g., ABCD1234
  amount: { type: Number, required: true }, // e.g., ₹500
  isUsed: { type: Boolean, default: false },
  usedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  usedAt: { type: Date },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GiftCard', giftCardSchema);
