// src/pages/MyOrders.js
import React from 'react';
import { useOrders } from '../contexts/OrderContext';

const MyOrders = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return <h3>You have no orders yet.</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>My Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="card mb-3 p-3">
          <h5>Order ID: #{order.orderId}</h5>
          <p><strong>Name:</strong> {order.customer.fullName}</p>
          <p><strong>Date:</strong> {order.orderDate}</p>
          <div className="d-flex align-items-center">
            <img src={order.product.image} alt={order.product.name} style={{ width: '80px', marginRight: '10px' }} />
            <div>
              <h6>{order.product.name}</h6>
              <p>Price: ₹{order.product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
