// src/pages/TrackOrders.js

import React, { useEffect, useState } from 'react';
import './TrackOrders.css';
import { useNavigate } from 'react-router-dom';

function TrackOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please log in to see your orders');
      setLoading(false);
      return;
    }

    fetch('http://localhost:3000/api/orders/my', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async res => {
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || 'Error fetching orders');
        }
        return res.json();
      })
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="track-orders">
      <h2>📦 My Orders</h2>

      {loading && <p>Loading your orders...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && orders.length === 0 && <p>You haven't placed any orders yet.</p>}

      {[...orders].reverse().map(order => (



        <div key={order._id} className="order-card">
          <h3>🆔 Order ID: {order._id}</h3>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
          <p><strong>Address:</strong> {order.address}</p>

          <h4>🛒 Products:</h4>
          <div className="order-products">
            {order.products.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.product?.image} alt={item.product?.name} width="50" />
                <p>{item.product?.name || 'Product'}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            ))}
          </div>

          <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>

          {/* Ek hi button for whole order */}
          <button
            onClick={() => navigate(`/track-order/${order._id}`)}
            style={{ cursor: 'pointer', marginTop: '10px' }}
          >
            Track Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default TrackOrders;
