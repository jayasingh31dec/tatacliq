import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersList = ({ isAdmin }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = isAdmin ? '/api/orders' : '/api/orders/user'; // Replace with appropriate URL for user orders
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError('Error fetching orders');
      }
    };

    fetchOrders();
  }, [isAdmin]);

  return (
    <div>
      <h2>Orders</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <li key={order._id}>
              <p>Order ID: {order._id}</p>
              <p>Status: {order.status}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Address: {order.address}</p>
              <p>Products:</p>
              <ul>
                {order.products.map((item) => (
                  <li key={item.product._id}>
                    {item.product.name} (x{item.quantity}) - ${item.product.price}
                  </li>
                ))}
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default OrdersList;
