import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Get the token from localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    // If there is no token, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If there is a token, render the children (Profile page)
  return children;
};

export default ProtectedRoute;
