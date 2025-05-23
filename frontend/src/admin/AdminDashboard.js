import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';


function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Welcome to Admin Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/admin/add-product" className="btn">Add Product</Link>
        <Link to="/admin/manage-orders" className="btn">Manage Orders</Link>
        <Link to="/admin/AdminGiftCardForm" className="btn">Create Gift Card</Link>


        {/* <Link to="/admin/manage-users" className="btn">Manage Users</Link> */}
      </div>
    </div>
  );
}

export default AdminDashboard;
