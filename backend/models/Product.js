const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // main image
  images: [{ type: String }], // multiple images

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
  },

  rating: { type: Number, default: 0 },  // 1 to 5 rating
  outOfStock: { type: Boolean, default: false }, // true means stock nahi hai
  limitedItem: { type: Boolean, default: false }, // true means limited edition
  discountPrice: { type: Number }, // discounted price
  discountPercent: { type: Number }, // e.g. 25 (for 25%)




  sizes: [{
    type: String,
    set: v => typeof v === "string" && isNaN(v) ? v.toUpperCase() : v
  }],





color: {
  type: [String],
  set: (colors) => {
    if (!Array.isArray(colors)) return [];
    return colors.map(color =>
      typeof color === 'string'
        ? color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()
        : color
    );
  }
}





  
}, { collection: 'products' });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;





















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
// }

// }, { collection: 'products' });

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
