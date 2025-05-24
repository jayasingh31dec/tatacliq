// const express = require('express');
// const router = express.Router();
// const GiftCard = require('../models/giftCard');
// const User = require('../models/User');


// // You forgot to import User model here!
// const { protect, protectAdmin } = require('../middleware/authMiddleware');

// // 🎁 Admin creates a gift card
// router.post('/create', protectAdmin, async (req, res) => {
//   try {
//     const { code, amount, expiresAt } = req.body;

//     const giftCard = new GiftCard({ code, amount, expiresAt });
//     await giftCard.save();

//     res.status(201).json(giftCard);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // ✅ User redeems a gift card
// router.post('/redeem', protect, async (req, res) => {
  
//   const { code } = req.body;

//   try {
//     const giftCard = await GiftCard.findOne({ code });

//     if (!giftCard) return res.status(404).json({ message: 'Gift card not found' });
//     if (giftCard.isUsed) return res.status(400).json({ message: 'Gift card already used' });
//     if (new Date(giftCard.expiresAt) < new Date()) return res.status(400).json({ message: 'Gift card expired' });

//     giftCard.isUsed = true;
//     giftCard.usedBy = req.user.id;
//     giftCard.usedAt = new Date();
//     await giftCard.save();

//     // You can also apply the amount to the user's wallet/order if you have such a system
//     res.status(200).json({ message: 'Gift card redeemed', amount: giftCard.amount });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Get user's wallet balance
// router.get('/wallet', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json({ balance: user.walletBalance || 0 });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });









// // GET /api/giftcards/available

// router.get('/available', async (req, res) => {
//   try {
//     const giftCards = await GiftCard.find({
//       isUsed: false,
//       expiresAt: { $gt: new Date() },
//     });
//     res.json(giftCards);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });








// module.exports = router;
































// const express = require('express');
// const router = express.Router();
// const GiftCard = require('../models/GiftCard');
// const User = require('../models/User');
// const { protect, protectAdmin } = require('../middleware/authMiddleware');

// // Admin: Create Gift Card
// router.post('/create', protectAdmin, async (req, res) => {
//   try {
//     const { code, pin, amount, expiresAt } = req.body;
//     const giftCard = new GiftCard({ code, pin, amount, expiresAt });
//     await giftCard.save();
//     res.status(201).json(giftCard);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // User: Redeem Gift Card
// router.post('/redeem', protect, async (req, res) => {
//   const { code, pin } = req.body;

//   // Simple validation
//   if (!/^\d{16}$/.test(code)) {
//     return res.status(400).json({ message: 'Code must be 16 digits.' });
//   }
//   if (!/^\d{4}$/.test(pin)) {
//     return res.status(400).json({ message: 'PIN must be 4 digits.' });
//   }

  

//   const giftCard = await GiftCard.findOne({ code, pin });
//   if (!giftCard) {
//     return res.status(404).json({ message: 'Gift card not found or wrong PIN.' });
//   }
//   if (giftCard.isUsed) {
//     return res.status(400).json({ message: 'Gift card already used.' });
//   }
//   if (new Date(giftCard.expiresAt) < new Date()) {
//     return res.status(400).json({ message: 'Gift card expired.' });
//   }

  

// // Mark as used
//   giftCard.isUsed = true;
//   giftCard.usedBy = req.user._id;
//   giftCard.usedAt = new Date();
//   await giftCard.save();

//   // Add to user's wallet
//   const user = await User.findById(req.user._id);
//   user.walletBalance += giftCard.amount;
//   await user.save();

//   res.json({ amount: giftCard.amount, newBalance: user.walletBalance, message: 'Gift card redeemed successfully.' });
// });



  




// routes/giftcards.js

// const express = require('express');
// const router = express.Router();
// const GiftCard = require('../models/GiftCard');
// const User = require('../models/User');
// const { protect, protectAdmin } = require('../middleware/authMiddleware');

// // Admin: Create Gift Card
// router.post('/create', protectAdmin, async (req, res) => {
//   try {
//     const { code, pin, amount, expiresAt } = req.body;
//     const giftCard = new GiftCard({ code, pin, amount, expiresAt });
//     await giftCard.save();
//     res.status(201).json(giftCard);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // User: Redeem Gift Card
// router.post('/redeem', protect, async (req, res) => {
//   const { code, pin } = req.body;

//   // Simple validation
//   if (!/^\d{16}$/.test(code)) {
//     return res.status(400).json({ message: 'Code must be 16 digits.' });
//   }
//   if (!/^\d{4}$/.test(pin)) {
//     return res.status(400).json({ message: 'PIN must be 4 digits.' });
//   }

//   try {
//     const giftCard = await GiftCard.findOne({ code, pin });
//     if (!giftCard) {
//       return res.status(404).json({ message: 'Gift card not found or wrong PIN.' });
//     }
//     if (giftCard.isUsed) {
//       return res.status(400).json({ message: 'Gift card already used.' });
//     }
//     if (new Date(giftCard.expiresAt) < new Date()) {
//       return res.status(400).json({ message: 'Gift card expired.' });
//     }

//     // Mark as used
//     giftCard.isUsed = true;
//     giftCard.usedBy = req.user._id;
//     giftCard.usedAt = new Date();
//     await giftCard.save();

//     // Add to user's wallet

//     const user = await User.findById(req.user.id);
//     user.walletBalance = (user.walletBalance || 0) + giftCard.amount;
//     await user.save();

//     res.json({ amount: giftCard.amount, newBalance: user.walletBalance, message: 'Gift card redeemed successfully.' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get Wallet Balance
// router.get('/wallet', protect, async (req, res) => {
//   try {

//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ balance: user.walletBalance || 0 });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get Available Gift Cards (optional)
// router.get('/available', async (req, res) => {
//   try {
//     const giftCards = await GiftCard.find({
//       isUsed: false,
//       expiresAt: { $gt: new Date() },
//     });
//     res.json(giftCards);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;











































const express = require('express');
const router = express.Router();
const GiftCard = require('../models/GiftCard');
const User = require('../models/User');
const { protect, protectAdmin } = require('../middleware/authMiddleware');

// Admin: Create Gift Card
router.post('/create', protectAdmin, async (req, res) => {
  try {
    const { code, pin, amount, expiresAt } = req.body;
    const giftCard = new GiftCard({ code, pin, amount, expiresAt });
    await giftCard.save();
    res.status(201).json(giftCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// User: Redeem Gift Card
router.post('/redeem', protect, async (req, res) => {
  const { code, pin } = req.body;

  // Simple validation
  if (!/^\d{16}$/.test(code)) {
    return res.status(400).json({ message: 'Code must be 16 digits.' });
  }
  if (!/^\d{4}$/.test(pin)) {
    return res.status(400).json({ message: 'PIN must be 4 digits.' });
  }

  try {
    const giftCard = await GiftCard.findOne({ code, pin });
    if (!giftCard) {
      return res.status(404).json({ message: 'Gift card not found or wrong PIN.' });
    }
    if (giftCard.isUsed) {
      return res.status(400).json({ message: 'Gift card already used.' });
    }
    if (new Date(giftCard.expiresAt) < new Date()) {
      return res.status(400).json({ message: 'Gift card expired.' });
    }

    // Mark as used
    giftCard.isUsed = true;
    giftCard.usedBy = req.user._id;
    giftCard.usedAt = new Date();
    await giftCard.save();










    // Add to user's wallet

   const user = await User.findById(req.user.id); // <--- Use .id
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    user.walletBalance = (user.walletBalance || 0) + giftCard.amount;
    await user.save();

    res.json({ amount: giftCard.amount, newBalance: user.walletBalance, message: 'Gift card redeemed successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// Get Wallet Balance
router.get('/wallet', protect, async (req, res) => {
  try {

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ balance: user.walletBalance || 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Available Gift Cards (optional)
router.get('/available', async (req, res) => {
  try {
    const giftCards = await GiftCard.find({
      isUsed: false,
      expiresAt: { $gt: new Date() },
    });
    res.json(giftCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});















// Deduct wallet balance (for partial/full wallet payment at checkout)
router.post('/deduct', protect, async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount' });
  }
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  if ((user.walletBalance || 0) < amount) {
    return res.status(400).json({ message: 'Insufficient wallet balance' });
  }
  user.walletBalance -= amount;
  await user.save();
  res.json({ newBalance: user.walletBalance });
});









// routes/giftcards.js
// Get all gift cards for the logged-in user (used and unused)
router.get('/my', protect, async (req, res) => {
  try {
    // Gift cards redeemed by user or assigned to user (if you have an owner field)
    const redeemed = await GiftCard.find({ usedBy: req.user.id });
    const available = await GiftCard.find({ isUsed: false, /* optionally: owner: req.user.id */ });
    res.json({ redeemed, available });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




















module.exports = router;











































