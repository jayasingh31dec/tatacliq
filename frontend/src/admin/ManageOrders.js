import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchOrders = () => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      setError('No token found. Please login again.');
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch('http://localhost:3000/api/admin/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to fetch');
        }
        return res.json();
      })
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error fetching orders');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`http://localhost:3000/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to update status');
      }

      await res.json();
      fetchOrders();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="manage-orders">
      <h2>Manage Orders</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {orders.length === 0 && !loading && !error && <p>No orders found.</p>}






      {orders.length > 0 && !loading && (

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user?.name || 'Unknown'}</td>
                <td>₹{order.totalPrice || 'N/A'}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={e => handleStatusChange(order._id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="out-for-delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>

                  <div className="status-history" style={{ marginTop: '5px', fontSize: '12px' }}>
                    {order.statusHistory?.map((entry, idx) => (
                      <div key={idx}>
                        ✅ <strong>{entry.status}</strong> on {new Date(entry.date).toLocaleDateString()}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => window.location.href = `/admin/orders/${order._id}`}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>





      )}
    </div>
  );
}

export default ManageOrders;
