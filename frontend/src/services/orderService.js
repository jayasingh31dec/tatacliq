import axios from 'axios';

// Setup axios instance for API calls
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to the request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Create an order
export const createOrder = (productId, quantity) => {
  return api.post('/orders', { productId, quantity });
};

// Get orders for the logged-in user
export const getUserOrders = () => {
  return api.get('/orders/mine');
};







export const getAllOrders = async () => {
  const response = await axios.get('/api/orders'); // Adjust API endpoint if needed
  return response.data;
};









export default api;
