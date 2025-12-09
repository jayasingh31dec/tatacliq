const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");  // Assuming the protect middleware is in this file
const { body, validationResult } = require("express-validator"); // To validate input

// POST add new product (Protected route)
router.post(
  "/",
  protect,  // Protect the route so only authenticated users can add products
  [
    body("name").not().isEmpty().withMessage("Product name is required"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("image").not().isEmpty().withMessage("Image URL is required"),
    body("category").not().isEmpty().withMessage("Category is required"),
    body("subcategory").not().isEmpty().withMessage("Subcategory is required"),
    body("item").not().isEmpty().withMessage("Item is required"),
    body("section").not().isEmpty().withMessage("Section is required"),
    body("rating").optional().isNumeric().withMessage("Rating must be a number"),
    body("outOfStock").optional().isBoolean().withMessage("outOfStock must be true or false"),
    body("limitedItem").optional().isBoolean().withMessage("limitedItem must be true or false"),
    body("discountPrice").optional().isNumeric().withMessage("Discount Price must be a number"),
    body("discountPercent").optional().isNumeric().withMessage("Discount Percent must be a number"),
    body("images").optional().isArray().withMessage("Images should be an array of URLs"),
    body("sizes").optional().isArray().withMessage("Sizes must be an array")




  ],
  async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, brand, price, image, images, description, category, subcategory, item, section, rating, outOfStock, limitedItem, discountPrice, discountPercent ,sizes, color } = req.body;
      const newProduct = new Product({
        name,
        brand,
        price,
        image,
        images,
        description,
        category: category.toLowerCase(),
        subcategory: subcategory.toLowerCase(),
        item: item.toLowerCase(),
        section: section.toLowerCase(),
        rating,
        outOfStock,
        limitedItem,
        discountPrice,
        discountPercent,
        sizes,
        color
      });

      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      console.error(err);  // Log the error for debugging purposes
      res.status(500).json({ message: "Error adding product", error: err.message });
    }
  }
);





// GET all products (Optionally filter by brand, section, category, subcategory)
router.get("/", async (req, res) => {
  try {
    const { brand, section, category, subcategory, item } = req.query;
    let query = {};

    if (brand) query.brand = new RegExp(`^${brand}$`, "i");
    if (section) query.section = new RegExp(`^${section}$`, "i");
    if (category) query.category = new RegExp(`^${category}$`, "i");
    if (subcategory) query.subcategory = new RegExp(`^${subcategory}$`, "i");
    if (item) query.item = new RegExp(`^${item}$`, "i");

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error(error);  // Log error for debugging
    res.status(500).json({ message: error.message });
  }
});















// Search products by name, brand, category etc.
router.get("/search", async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    const results = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { subcategory: { $regex: query, $options: "i" } },
        { item: { $regex: query, $options: "i" } },
      ],
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error });
  }
});



















// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: "Error fetching product" });
  }
});









// PUT update product by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.error(err);  // Log error for debugging
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
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: err.message });
  }
});









// GET /api/products/filters
router.get("/filters", async (req, res) => {
  try {
    const brands = await Product.distinct("brand");
    const categories = await Product.distinct("category");
    const subcategories = await Product.distinct("subcategory");
    const items = await Product.distinct("item");
    const sections = await Product.distinct("section");
    const sizes = await Product.distinct("sizes");

    res.json({ brands, categories, subcategories, items, sections, sizes });
  } catch (error) {
    console.error("Error getting filter data:", error);
    res.status(500).json({ message: "Failed to load filters" });
  }
});













module.exports = router;
