// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './OrderDetails.css';

// function OrderDetails() {
//     const { id } = useParams();
//     const [order, setOrder] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const token = localStorage.getItem('adminToken');

//         fetch(`http://localhost:3000/api/admin/orders/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//             .then(async res => {
//                 if (!res.ok) {
//                     const data = await res.json();
//                     throw new Error(data.message || 'Failed to fetch order');
//                 }
//                 return res.json();
//             })
//             .then(data => setOrder(data))
//             .catch(err => setError(err.message));
//     }, [id]);

//     if (error) return <p style={{ color: 'red' }}>{error}</p>;
//     if (!order) return <p>Loading order details...</p>;

//     return (
//         <div className="order-details-page">
//             <h2>Order Details</h2>

//             {/* ✅ Order Info */}
//             <div className="card">
//                 <h3>Order Info</h3>
//                 <p><strong>Order ID:</strong> {order._id}</p>
//                 <p><strong>Status:</strong> {order.status}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                 <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
//             </div>

//             {/* ✅ Customer Info */}
//             <div className="card">
//                 <h3>Customer Info</h3>
//                 <p><strong>Name:</strong> {order.user?.name}</p>
//                 <p><strong>Email:</strong> {order.user?.email}</p>
//                 <p><strong>Address:</strong> {order.address || 'N/A'}</p>

//             </div>

//             {/* ✅ Payment Info */}
//             <div className="card">
//                 <h3>Payment Info</h3>
//                 <p><strong>Payment Method:</strong> {order.paymentMethod || 'Not Available'}</p>
//                 <p><strong>Is Paid:</strong>
//                     {order.paymentMethod === 'cod' ? 'No' : 'Yes'}
//                 </p>

//                 <p><strong>Paid At:</strong>
//                     {(order.paymentMethod === 'cod') ? 'N/A' : new Date(order.paidAt).toLocaleString()}
//                 </p>






//             </div>

//             {/* ✅ Product Info */}
//             <div className="card">
//                 <h3>Product Info</h3>
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Name</th>
//                             <th>Brand</th>
//                             <th>Quantity</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {order.products.map((item, index) => (
//                             <tr key={index}>
//                                 <td><img src={item.product?.image} alt="product" width="60" /></td>
//                                 <td>{item.product?.name}</td>
//                                 <td>{item.product?.brand}</td>
//                                 <td>{item.quantity}</td>
//                                 <td>  ₹{item.product?.price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '10px' }}>
//                     Total Price: ₹{order.totalPrice}
//                 </div>
//             </div>



//             {/* ✅ Status History */}
//             < div className="card" >
//                 <h3>Status History</h3>
//                 {
//                     order.statusHistory?.length > 0 ? (
//                         <ul className="status-history">
//                             {order.statusHistory.map((entry, idx) => (
//                                 <li key={idx}>
//                                     ✅ <strong>{entry.status}</strong> on{' '}
//                                     {new Date(entry.date).toLocaleString()}
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No history available.</p>
//                     )
//                 }
//             </div >
//         </div >
//     );
// }

// export default OrderDetails;






















































import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './OrderDetails.css';
import { API_BASE_URL } from '../config';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    fetch(`${API_BASE_URL}/api/admin/orders/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async res => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to fetch order');
        }
        return res.json();
      })
      .then(data => setOrder(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!order) return <p>Loading order details...</p>;

  return (
    <div className="order-details-page">
      <h2 className="page-title">Order Details</h2>

      <div className="card-row">
        <div className="card">
          <h3>Order Info</h3>
          <p><strong>ID:</strong> {order._id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>


        <div className="card">
          <h3>Customer</h3>
          <p><strong>Name:</strong> {order.user?.name}</p>
          <p><strong>Email:</strong> {order.user?.email}</p>
          <p><strong>Address:</strong> {order.address || 'N/A'}</p>
        </div>














        <div className="card">
  <h3>Payment</h3>

  <p><strong>Payment Method:</strong> {order.paymentMethod || 'Not Available'}</p>

  {/* Cash on Delivery Handling */}
  {order.paymentMethod === 'cod' ? (
    <>
      <p><strong>Is Paid:</strong> {order.status === 'delivered' ? 'Yes' : 'No'}</p>

      <p><strong>Paid At:</strong> 
        {order.status === 'delivered'
          ? (() => {
              const deliveredEntry = order.statusHistory?.find(
                entry => entry.status === 'delivered'
              );
              return deliveredEntry
                ? new Date(deliveredEntry.date).toLocaleString()
                : 'N/A';
            })()
          : 'N/A'}
      </p>

      <p><strong>Total Amount:</strong> ₹{order.totalPrice}</p>
    </>
  ) : (
    // Online payment
     <>
      <p><strong>Is Paid:</strong> Yes</p>
      <p><strong>Paid At:</strong> 
        {order.paidAt
          ? new Date(order.paidAt).toLocaleString()
          : 'Not Available'}
      </p>
      <p><strong>Total Amount:</strong> ₹{order.totalPrice}</p>
    </>
  )}
</div>
















      </div>

      <div className="card product-card">
        <h3>Products</h3>
        <table>
          <thead>
            <tr>
              <th>Image</th><th>Name</th><th>Brand</th><th>Qty</th><th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((item,i)=>(
              <tr key={i}>
                <td><img src={item.product.image} alt="" className="prod-img"/></td>
                <td>{item.product.name}</td>
                <td>{item.product.brand}</td>
                <td>{item.quantity}</td>
                <td>₹{item.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <strong>Total:</strong> ₹{order.totalPrice}
        </div>
      </div>
<div className="card">








       
        {/* ✅ Status History */}
             {/* < div className="card" > */}
                 <h3>Status History</h3>
                 
                    {order.statusHistory?.length > 0 ? (
                        <ul className="status-history">
                            {order.statusHistory.map((entry, idx) => (
                                <li key={idx}>
                                    ✅ <strong>{entry.status}</strong> on{' '}
                                    {new Date(entry.date).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No history available.</p>
                    )}
                    </div>







      </div>
    // </div>
  );
}

export default OrderDetails;

