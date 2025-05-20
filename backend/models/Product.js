// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   brand: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
//   description: { type: String, required: true },
//   category: { 
//     type: String, 
//     required: true,
//     lowercase: true,
//     set: v => v.toLowerCase()
//   },
//   subcategory: { 
//     type: String, 
//     required: true,
//     lowercase: true,
//     set: v => v.toLowerCase()
//   },
//   item: { 
//     type: String, 
//     required: true,
//     lowercase: true,
//     set: v => v.toLowerCase()
//   },




//   section: {
//   type: String,
//   required: true,
//   lowercase: true,
//   set: v => v.toLowerCase()
// },




// }, { collection: 'products' });

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
























const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },             // Purana price, optional
  discount: { type: String },             // Discount text, optional
  rating: { type: Number },               // Star rating, optional
  ratingCount: { type: Number },          // Kitne logon ne rating di, optional
  priceDrop: { type: String },            // Jaise "Price dropped by ₹220", optional
  stockStatus: { type: String },          // Jaise "Limited stock!", optional
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    lowercase: true,
    set: v => v.toLowerCase()
  },
  subcategory: { 
    type: String, 
    required: true,
    lowercase: true,
    set: v => v.toLowerCase()
  },
  item: { 
    type: String, 
    required: true,
    lowercase: true,
    set: v => v.toLowerCase()
  },
  section: {
  type: String,
  required: true,
  lowercase: true,
  set: v => v.toLowerCase()
}

}, { collection: 'products' });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
