const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
   address: { type: String },








  //GIT CARD KE LIY ADD KIYA HAI 

   walletBalance: {
    type: Number,
    default: 0,
  }
  
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
