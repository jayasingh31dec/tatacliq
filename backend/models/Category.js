const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  subcategories: {
    type: Map,
    of: [String],
    required: true,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
