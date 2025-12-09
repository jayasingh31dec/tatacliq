const express = require('express');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');



const router = express.Router();

// Register and login routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected profile route
router.get('/users/profile', protect, authController.getProfile);





module.exports = router;
