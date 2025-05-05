import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useOrders } from '../contexts/OrderContext'; // ✅ import order context

const CheckoutPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const { placeOrder } = useOrders(); // ✅ use order context

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!product) {
    return <h3 className="text-center mt-5">No product to checkout.</h3>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.address
    ) {
      const newOrder = {
        product,
        customer: formData,
        orderDate: new Date().toLocaleString(),
        orderId: Math.floor(Math.random() * 1000000),
      };

      placeOrder(newOrder); // ✅ Save order in context
      setOrderPlaced(true);
    } else {
      alert('Please fill all details');
    }
  };

  if (orderPlaced) {
    return (
      <div className="container mt-5 text-center">
        <h2>✅ Order Placed Successfully!</h2>
        <p>
          Thank you, <strong>{formData.fullName}</strong>! Your order for{' '}
          <strong>{product.name}</strong> has been confirmed.
        </p>
        <p>Order ID: <strong>#{Math.floor(Math.random() * 1000000)}</strong></p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="row">
        {/* Product Details */}
        <div className="col-md-6">
          <div className="card p-3">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">Price: ₹{product.price}</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h4>Shipping & Payment Details</h4>
          <div className="form-group mb-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              className="form-control"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Credit/Debit Card</option>
              
            </select>
            <input type="text" name="paymentDetails" className="form-control mt-2" placeholder="Card number / UPI ID / Mobile number" onChange={handleChange}/>

          </div>
          <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
