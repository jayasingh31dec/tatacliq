const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// POST add new product
router.post("/", async (req, res) => {
  try {
    const { name, brand, price, image, description, category, subcategory, item } = req.body;
    const newProduct = new Product({
      name,
      brand,
      price,
      image,
      description,
      category: category.toLowerCase(),
      subcategory: subcategory.toLowerCase(),
      item: item.toLowerCase(),
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error adding product" });
  }
});

// GET products (optionally filter by brand)
router.get("/", async (req, res) => {
  try {
    const brand = req.query.brand;
    let products;

    if (brand) {
      products = await Product.find({
        brand: { $regex: new RegExp(`^${brand}$`, "i") }
      });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

// PUT update product by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
