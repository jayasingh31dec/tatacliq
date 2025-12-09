import React, { useEffect, useState } from 'react';
import { getUserOrders } from '../api/orderApi';

function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getUserOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-3">
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
          <ul className="mt-2">
            {order.products.map((item, index) => (
              <li key={index}>
                {item.product?.name} - ₹{item.product?.price} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserOrders;
