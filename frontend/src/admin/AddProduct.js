import React, { useState } from "react";
import { addProduct } from "../services/productService";
import categories from "../data/categories";
import "./AddProduct.css";

const availableColors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];
const sections = [
  "Lightening Deals", "Cliq All Stars", "Her Fashion Universe",
  "His Fashion Universe", "Your Sole World", "Galaxy Of Time",
  "Stellar Accessories", "Planet Home", "Non section"
];

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    images: [],
    description: "",
    category: "",
    subcategory: "",
    item: "",
    section: "",
    sizes: [],
    color: [],
    outOfStock: false,
    limitedItem: false,
    discountPrice: "",
    discountPercent: "",
    rating: ""
  });

  // ✅ Dynamic size options based on subcategory
  const getAvailableSizes = () => {
    const footwearKeywords = ["footwear", "shoe", "sandal", "slipper"];
    const sub = formData.subcategory.toLowerCase();
    if (footwearKeywords.some(keyword => sub.includes(keyword))) {
      return ["6", "7", "8", "9", "10", "11"];
    }
    return ["XS", "S", "M", "L", "XL", "XXL"];
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "sizes") {
      setFormData((prev) => ({
        ...prev,
        sizes: checked
          ? [...prev.sizes, value]
          : prev.sizes.filter((s) => s !== value)
      }));
      return;
    }

    if (type === "checkbox" && (name === "outOfStock" || name === "limitedItem")) {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (name === "color") {
      const selectedOptions = Array.from(e.target.selectedOptions, opt => opt.value);
      setFormData((prev) => ({ ...prev, color: selectedOptions }));
      return;
    }

    if (name === "images") {
      setFormData((prev) => ({ ...prev, images: value.split(",").map(url => url.trim()) }));
      return;
    }

    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        subcategory: "",
        item: "",
        sizes: []  // Reset sizes
      }));
      return;
    }

    if (name === "subcategory") {
      setFormData((prev) => ({
        ...prev,
        subcategory: value,
        item: "",
        sizes: []  // Reset sizes
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const numericFields = ["price", "discountPrice", "discountPercent", "rating"];
      const validatedData = { ...formData };

      numericFields.forEach(field => {
        if (validatedData[field]) {
          validatedData[field] = parseFloat(validatedData[field]);
        }
      });

      const added = await addProduct(validatedData);
      console.log("✅ Product added:", added);
      alert("✅ Product added successfully!");

      setFormData({
        name: "",
        brand: "",
        price: "",
        image: "",
        images: [],
        description: "",
        category: "",
        subcategory: "",
        item: "",
        section: "",
        sizes: [],
        color: [],
        outOfStock: false,
        limitedItem: false,
        discountPrice: "",
        discountPercent: "",
        rating: ""
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

  const availableSizes = getAvailableSizes();

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Thumbnail Image URL" required />
        <input name="images" value={formData.images.join(", ")} onChange={handleChange} placeholder="Image URLs (comma-separated)" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />

        <select name="section" value={formData.section} onChange={handleChange} required>
          <option value="">Select Section</option>
          {sections.map((sec) => (
            <option key={sec} value={sec}>{sec}</option>
          ))}
        </select>

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>

        <select name="subcategory" value={formData.subcategory} onChange={handleChange} required disabled={!formData.category}>
          <option value="">Select Subcategory</option>
          {subcategories.map((subcat) => (
            <option key={subcat} value={subcat}>{subcat}</option>
          ))}
        </select>

        <select name="item" value={formData.item} onChange={handleChange} required disabled={!formData.subcategory}>
          <option value="">Select Item</option>
          {items.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        {/*  Dynamic Sizes */}
        <div className="multi-checkbox">
  <label>Sizes ({formData.sizes.length} selected):</label>
  <div className="checkbox-grid">
    {availableSizes.map(size => (
      <label key={size}>
        <input
          type="checkbox"
          name="sizes"
          value={size}
          checked={formData.sizes.includes(size)}
          onChange={handleChange}
        /> {size}
      </label>
    ))}
  </div>
</div>








        {/* ✅ Multi-select Colors */}
       <div className="multi-checkbox">
  <label>Colors ({formData.color.length} selected):</label>
  <div className="checkbox-grid">
    {availableColors.map(color => (
      <label key={color}>
        <input
          type="checkbox"
          name="color"
          value={color}
          checked={formData.color.includes(color)}
          onChange={(e) => {
            const { value, checked } = e.target;
            setFormData((prev) => ({
              ...prev,
              color: checked
                ? [...prev.color, value]
                : prev.color.filter(c => c !== value)
            }));
          }}
        /> {color}
      </label>
    ))}
  </div>
</div>











        <div>
          <label>
            <input
              type="checkbox"
              name="outOfStock"
              checked={formData.outOfStock}
              onChange={handleChange}
            /> Out of Stock
          </label>

          <label>
            <input
              type="checkbox"
              name="limitedItem"
              checked={formData.limitedItem}
              onChange={handleChange}
            /> Limited Item
          </label>
        </div>

        <input
          name="discountPrice"
          type="number"
          value={formData.discountPrice}
          onChange={handleChange}
          placeholder="Discount Price"
        />

        <input
          name="discountPercent"
          type="number"
          value={formData.discountPercent}
          onChange={handleChange}
          placeholder="Discount %"
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating (0 to 5)"
        />

        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
