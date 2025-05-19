// src/services/productService.js
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/products";

// POST - Add new product
export const addProduct = async (productData) => {
  const token = localStorage.getItem("adminToken"); // ✅ get saved token

  const response = await axios.post(BASE_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ attach token
    },
  });

  return response.data;
};


// GET - Get all products (no token needed for public access)
export const getAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
