const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Product = require('../models/Product');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new category
router.post('/', async (req, res) => {
  try {
    const { name, slug, subcategories } = req.body;
    const category = new Category({ name, slug: slug.toLowerCase(), subcategories });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error saving category' });
  }
});

// GET products by category / subcategory / item (case-insensitive)
router.get('/:categorySlug/:subCategory/:item', async (req, res) => {
  const { categorySlug, subCategory, item } = req.params;

  try {
    const products = await Product.find({
      category: { $regex: new RegExp(`^${categorySlug}$`, 'i') },
      subcategory: { $regex: new RegExp(`^${subCategory}$`, 'i') },
      item: { $regex: new RegExp(`^${item.replace(/-/g, ' ')}$`, 'i') }, // Replace hyphens with spaces
    });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE category by slug
router.delete('/:slug', async (req, res) => {
  try {
    await Category.deleteOne({ slug: req.params.slug.toLowerCase() });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category' });
  }
});

module.exports = router;
