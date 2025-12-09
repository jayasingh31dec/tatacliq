// frontend/src/services.js
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/api/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    } else {
      throw new Error('Network error. Please try again.');
    }
  }
};

// Add other services like login, fetch profile etc. later


// frontend/src/services.js
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/api/login`, userData);
    return response.data; // should include { token: '...', user: {...} }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('Network error. Please try again.');
    }
  }
};
