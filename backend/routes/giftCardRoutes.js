const express = require('express');
const router = express.Router();
const GiftCard = require('../models/giftCard');
const User = require('../models/User');


// You forgot to import User model here!
const { protect, protectAdmin } = require('../middleware/authMiddleware');

// 🎁 Admin creates a gift card
router.post('/create', protectAdmin, async (req, res) => {
  try {
    const { code, amount, expiresAt } = req.body;

    const giftCard = new GiftCard({ code, amount, expiresAt });
    await giftCard.save();

    res.status(201).json(giftCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ User redeems a gift card
router.post('/redeem', protect, async (req, res) => {
  const { code } = req.body;

  try {
    const giftCard = await GiftCard.findOne({ code });

    if (!giftCard) return res.status(404).json({ message: 'Gift card not found' });
    if (giftCard.isUsed) return res.status(400).json({ message: 'Gift card already used' });
    if (new Date(giftCard.expiresAt) < new Date()) return res.status(400).json({ message: 'Gift card expired' });

    giftCard.isUsed = true;
    giftCard.usedBy = req.user.id;
    giftCard.usedAt = new Date();
    await giftCard.save();

    // You can also apply the amount to the user's wallet/order if you have such a system
    res.status(200).json({ message: 'Gift card redeemed', amount: giftCard.amount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get user's wallet balance
router.get('/wallet', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ balance: user.walletBalance || 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});









// GET /api/giftcards/available
router.get('/available', async (req, res) => {
  try {
    const giftCards = await GiftCard.find({ isUsed: false, expiresAt: { $gt: new Date() } });
    res.json(giftCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});







module.exports = router;
