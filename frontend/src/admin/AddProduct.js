import React, { useState } from "react";
import { addProduct } from "../services/productService";
import categories from "../data/categories"; // Adjust path if needed
import './AddProduct.css';


function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
    category: "",
    subcategory: "",
    item: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset subcategory and item if category changes
    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        subcategory: "",
        item: ""
      }));
      return;
    }

    // Reset item if subcategory changes
    if (name === "subcategory") {
      setFormData((prev) => ({
        ...prev,
        subcategory: value,
        item: ""
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const added = await addProduct(formData);
      console.log("✅ Product added:", added);
      alert("✅ Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        brand: "",
        price: "",
        image: "",
        description: "",
        category: "",
        subcategory: "",
        item: ""
      });
    } catch (error) {
      console.error("❌ Error adding product:", error);
      alert("❌ Failed to add product");
    }
  };

  const selectedCategory = categories.find(c => c.slug === formData.category);
  const subcategories = selectedCategory ? Object.keys(selectedCategory.subcategories) : [];
  const items = selectedCategory && formData.subcategory
    ? selectedCategory.subcategories[formData.subcategory] || []
    : [];

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
        <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />

        {/* Category dropdown */}
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>

        {/* Subcategory dropdown */}
        <select name="subcategory" value={formData.subcategory} onChange={handleChange} required disabled={!formData.category}>
          <option value="">Select Subcategory</option>
          {subcategories.map((subcat) => (
            <option key={subcat} value={subcat}>{subcat}</option>
          ))}
        </select>

        {/* Item dropdown */}
        <select name="item" value={formData.item} onChange={handleChange} required disabled={!formData.subcategory}>
          <option value="">Select Item</option>
          {items.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
