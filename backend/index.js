require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const giftCardRoutes = require('./routes/giftCardRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

const stripeRoutes = require('./routes/stripe');


const app = express();
const PORT = process.env.PORT || 3000;



// // Middleware


const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3005';

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);




app.use(express.json());

// Routes

app.use('/api',authRoutes);
app.use("/api/products", productRoutes);
app.use('/api/categories', categoryRoutes); 
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes); // Admin login route

app.use('/api/stripe', stripeRoutes);

app.use('/api/giftcards', giftCardRoutes);


 mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ DB connection error:', err));
