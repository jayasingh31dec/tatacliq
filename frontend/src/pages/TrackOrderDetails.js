import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TrackOrderDetails.css'; // Styling ke liye
import { API_BASE_URL } from '../config';

function TrackOrderDetails() {
  const { id: orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Please log in to view this order');
      setLoading(false);
      return;
    }

    fetch(`${API_BASE_URL}/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(async res => {
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || 'Error loading order');
        }
        return res.json();
      })
      .then(data => {
        console.log('Order status:', data.status);
        setOrder(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [orderId]);

  const statusSteps = ['pending', 'shipped', 'out-for-delivery', 'delivered'];
















  const getStepClass = (step) => {
  if (!order?.status) return '';

  const currentStatus = order.status.toLowerCase(); // backend se aaya status
  const currentIndex = statusSteps.indexOf(currentStatus); // correct index
  const stepIndex = statusSteps.indexOf(step); // current loop index

  if (stepIndex < currentIndex) return 'completed';
  if (stepIndex === currentIndex) return 'current';
  return '';
};



















  if (loading) return <p>Loading order...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
  <div className="track-order-details">
    <h2 className="tracking-heading">📍 Order Tracking - {order._id}</h2>

    <div className="status-tracker">
      {statusSteps.map((step, index) => (
        <div key={index} className={`step-box ${getStepClass(step)}`}>
          <div className="step-circle">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>








      <h3>🛒 Products</h3>
<table className="order-table">
  <thead>
    <tr>
      <th>Image</th>
      <th>Product Name</th>
      <th>Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    {order.products.map((item, idx) => (
      <tr key={idx}>
        <td>
          <img 
            src={item.product.image} 
            alt={item.product.name} 
            width="50" 
            height="50"
            style={{ objectFit: 'contain' }}
          />
        </td>
        <td>{item.product.name}</td>
        <td>{item.quantity}</td>
        
      </tr>
    ))}
  </tbody>
</table>








      

      <p className="order-total"><strong>Total:</strong> ₹{order.totalPrice}</p>

      {/* <p><strong>Address:</strong> {order.address}</p> */}
    </div>
  );
}

export default TrackOrderDetails;
