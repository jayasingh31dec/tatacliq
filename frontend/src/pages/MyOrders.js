import React, { useEffect, useState } from 'react';
import { useOrders } from '../contexts/userOrderContext';
import './MyOrders.css';
import { API_BASE_URL } from '../config';

function MyOrders() {
  const { orders, setOrders } = useOrders();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // or use context
        const response = await fetch(`${API_BASE_URL}/api/orders/my`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch orders');

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [setOrders]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <div className="order-image">
                {order.products.map((item, index) => (
                  <img
                    key={index}
                    src={item.product?.image}
                    alt={item.product?.name || 'Unnamed Product'}
                    className="product-image"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                  />
                ))}
              </div>
              <div className="order-details">
                <div className="product-names">
                  {order.products.map((item, index) => (
                    <p key={index}>
                      {item.product?.name || 'Unnamed Product'} × {item.quantity}
                    </p>
                  ))}
                </div>

                <p className="order-date">Ordered on: {new Date(order.createdAt).toLocaleDateString()}</p>
                <p className="order-price">Price: ₹{order.totalPrice}</p>
                <p className="order-address">Delivery Address: {order.address}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
