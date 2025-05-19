import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrders } from '../contexts/OrderContext';
import './CheckoutPage.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePayment from '../components/StripePayment';
import { useCart } from '../contexts/CartContext';






const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { placeOrder } = useOrders();
  const { clearCart } = useCart();

  const products = location.state?.products || [];

  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [address, setAddress] = useState('');
  const [useNewAddress, setUseNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
      setAddress(storedUser.address || '');
    }
  }, []);

  if (!user) return <p>Please log in to continue with checkout.</p>;
  if (products.length === 0) return <p>No products selected for checkout.</p>;

  const totalAmount = products.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePayment = async () => {
    const finalAddress = useNewAddress ? newAddress : address;

    const orderData = {
      user: user.id,
      products: products.map(p => ({
        product: p._id,
        quantity: p.quantity || 1
      })),
      totalPrice: totalAmount,
      address: finalAddress,
      name: user.name,
      email: user.email,
      paymentMethod
    };

    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) throw new Error('Order failed');

      const order = await response.json();
      placeOrder(order);
      clearCart();
      setIsPaid(true);
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error('Order error:', err);
    }
  };

  const handleCODorUPI = async (e) => {
    e.preventDefault();
    await handlePayment();
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <div className="checkout-user-info">
          🧑 Logged in as <strong>{user.name}</strong> ({user.email})
        </div>
      </div>

      <div className="checkout-card">
        {/* Left: Product List */}
        <div className="product-list">
          <h3>Your Cart</h3>
          {products.map((item, index) => (
            <div key={index} className="product-details">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <p><strong>{item.name}</strong></p>
                <p>₹{item.price} × {item.quantity || 1}</p>
              </div>
            </div>
          ))}
          <h4>Total Amount: ₹{totalAmount}</h4>
        </div>

        {/* Right: Address + Payment */}
        <div className="checkout-right">
          {isPaid ? (
            <div className="payment-success">
              ✅ Payment Successful! Redirecting...
            </div>
          ) : (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={useNewAddress}
                  onChange={() => setUseNewAddress(!useNewAddress)}
                />
                Use new address
              </label>

              {useNewAddress ? (
                <textarea
                  placeholder="Enter new delivery address"
                  value={newAddress}
                  onChange={e => setNewAddress(e.target.value)}
                  className="form-control"
                  required
                  rows="3"
                />
              ) : (
                <textarea
                  value={address}
                  readOnly
                  className="form-control"
                  rows="3"
                />
              )}

              <select
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="card">💳 Credit / Debit Card</option>
                <option value="upi">📱 UPI</option>
                <option value="cod">💵 Cash on Delivery</option>
              </select>

              {paymentMethod === 'card' ? (
                <Elements stripe={stripePromise}>
                  <StripePayment amount={totalAmount} onSuccess={handlePayment} />
                </Elements>
              ) : (
                <form onSubmit={handleCODorUPI}>
                  <button type="submit" className="btn pay-btn">
                    Place Order (₹{totalAmount})
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
