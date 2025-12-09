// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useOrders } from '../contexts/OrderContext';
// import './CheckoutPage.css';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import StripePayment from '../components/StripePayment';
// import { useCart } from '../contexts/CartContext';






// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// function CheckoutPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { placeOrder } = useOrders();
//   const { clearCart } = useCart();

//   const products = location.state?.products || [];

//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');
//   const [address, setAddress] = useState('');
//   const [useNewAddress, setUseNewAddress] = useState(false);
//   const [newAddress, setNewAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [isPaid, setIsPaid] = useState(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     const storedToken = localStorage.getItem('token');

//     if (storedUser && storedToken) {
//       setUser(storedUser);
//       setToken(storedToken);
//       setAddress(storedUser.address || '');
//     }
//   }, []);

//   if (!user) return <p>Please log in to continue with checkout.</p>;
//   if (products.length === 0) return <p>No products selected for checkout.</p>;

//   const totalAmount = products.reduce(
//     (total, item) => total + item.price * (item.quantity || 1),
//     0
//   );

//   const handlePayment = async () => {
//     const finalAddress = useNewAddress ? newAddress : address;

//     const orderData = {
//       user: user.id,
//       products: products.map(p => ({
//         product: p._id,
//         quantity: p.quantity || 1
//       })),
//       totalPrice: totalAmount,
//       address: finalAddress,
//       name: user.name,
//       email: user.email,
//       paymentMethod
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(orderData)
//       });

//       if (!response.ok) throw new Error('Order failed');

//       const order = await response.json();
//       placeOrder(order);
//       clearCart();
//       setIsPaid(true);
//       setTimeout(() => navigate('/'), 1000);
//     } catch (err) {
//       console.error('Order error:', err);
//     }
//   };

//   const handleCODorUPI = async (e) => {
//     e.preventDefault();
//     await handlePayment();
//   };

//   return (
//     <div className="checkout-container">
//       <div className="checkout-header">
//         <h2>Checkout</h2>
//         <div className="checkout-user-info">
//           🧑 Logged in as <strong>{user.name}</strong> ({user.email})
//         </div>
//       </div>

//       <div className="checkout-card">
//         {/* Left: Product List */}
//         <div className="product-list">
//           <h3>Your Cart</h3>
//           {products.map((item, index) => (
//             <div key={index} className="product-details">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <p><strong>{item.name}</strong></p>
//                 <p>₹{item.price} × {item.quantity || 1}</p>
//               </div>
//             </div>
//           ))}
//           <h4>Total Amount: ₹{totalAmount}</h4>
//         </div>

//         {/* Right: Address + Payment */}
//         <div className="checkout-right">
//           {isPaid ? (
//             <div className="payment-success">
//               ✅ Payment Successful! Redirecting...
//             </div>
//           ) : (
//             <>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={useNewAddress}
//                   onChange={() => setUseNewAddress(!useNewAddress)}
//                 />
//                 Use new address
//               </label>

//               {useNewAddress ? (
//                 <textarea
//                   placeholder="Enter new delivery address"
//                   value={newAddress}
//                   onChange={e => setNewAddress(e.target.value)}
//                   className="form-control"
//                   required
//                   rows="3"
//                 />
//               ) : (
//                 <textarea
//                   value={address}
//                   readOnly
//                   className="form-control"
//                   rows="3"
//                 />
//               )}

//               <select
//                 className="form-control"
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 required
//               >
//                 <option value="card">💳 Credit / Debit Card</option>
//                 <option value="upi">📱 UPI</option>
//                 <option value="cod">💵 Cash on Delivery</option>
//               </select>

//               {paymentMethod === 'card' ? (
//                 <Elements stripe={stripePromise}>
//                   <StripePayment amount={totalAmount} onSuccess={handlePayment} />
//                 </Elements>
//               ) : (
//                 <form onSubmit={handleCODorUPI}>
//                   <button type="submit" className="btn pay-btn">
//                     Place Order (₹{totalAmount})
//                   </button>
//                 </form>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;




















































// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useOrders } from '../contexts/OrderContext';
// import './CheckoutPage.css';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import StripePayment from '../components/StripePayment';
// import { useCart } from '../contexts/CartContext';

// import GiftCardForm from '../Cliqcash/GiftCardForm';  // <-- import gift card form

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// function CheckoutPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { placeOrder } = useOrders();
//   const { clearCart } = useCart();

//   const products = location.state?.products || [];

//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');
//   const [address, setAddress] = useState('');
//   const [useNewAddress, setUseNewAddress] = useState(false);
//   const [newAddress, setNewAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [isPaid, setIsPaid] = useState(false);

//   const [giftCardAmount, setGiftCardAmount] = useState(0);  // Gift card discount amount

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     const storedToken = localStorage.getItem('token');

//     if (storedUser && storedToken) {
//       setUser(storedUser);
//       setToken(storedToken);
//       setAddress(storedUser.address || '');
//     }
//   }, []);

//   if (!user) return <p>Please log in to continue with checkout.</p>;
//   if (products.length === 0) return <p>No products selected for checkout.</p>;

//   const totalAmount = products.reduce(
//     (total, item) => total + item.price * (item.quantity || 1),
//     0
//   );

//   // Calculate final amount after applying gift card discount (minimum 0)
//   const finalAmount = totalAmount - giftCardAmount > 0 ? totalAmount - giftCardAmount : 0;

//   // Handler to receive applied gift card amount from GiftCardForm
//   const handleGiftCardApply = (amount) => {
//     setGiftCardAmount(amount);
//   };

//   const handlePayment = async () => {
//     const finalAddress = useNewAddress ? newAddress : address;

//     const orderData = {
//       user: user.id,
//       products: products.map(p => ({
//         product: p._id,
//         quantity: p.quantity || 1
//       })),
//       totalPrice: finalAmount,
//       address: finalAddress,
//       name: user.name,
//       email: user.email,
//       paymentMethod
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(orderData)
//       });

//       if (!response.ok) throw new Error('Order failed');

//       const order = await response.json();
//       placeOrder(order);
//       clearCart();
//       setIsPaid(true);
//       setTimeout(() => navigate('/'), 1000);
//     } catch (err) {
//       console.error('Order error:', err);
//     }
//   };

//   const handleCODorUPI = async (e) => {
//     e.preventDefault();
//     await handlePayment();
//   };

//   return (
//     <div className="checkout-container">
//       <div className="checkout-header">
//         <h2>Checkout</h2>
//         <div className="checkout-user-info">
//           🧑 Logged in as <strong>{user.name}</strong> ({user.email})
//         </div>
//       </div>

//       <div className="checkout-card">
//         {/* Left: Product List */}
//         <div className="product-list">
//           <h3>Your Cart</h3>
//           {products.map((item, index) => (
//             <div key={index} className="product-details">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <p><strong>{item.name}</strong></p>
//                 <p>₹{item.price} × {item.quantity || 1}</p>
//               </div>
//             </div>
//           ))}

          

//           <h4>
//             Total Amount: ₹{finalAmount}
//             {giftCardAmount > 0 && (
//               <span style={{ color: 'green', marginLeft: '10px' }}>
//                 (₹{giftCardAmount} gift card applied)
//               </span>
//             )}
//           </h4>
//         </div>

//         {/* Right: Address + Payment */}
//         <div className="checkout-right">
//           {isPaid ? (
//             <div className="payment-success">
//               ✅ Payment Successful! Redirecting...
//             </div>
//           ) : (
//             <>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={useNewAddress}
//                   onChange={() => setUseNewAddress(!useNewAddress)}
//                 />
//                 Use new address
//               </label>

//               {useNewAddress ? (
//                 <textarea
//                   placeholder="Enter new delivery address"
//                   value={newAddress}
//                   onChange={e => setNewAddress(e.target.value)}
//                   className="form-control"
//                   required
//                   rows="3"
//                 />
//               ) : (
//                 <textarea
//                   value={address}
//                   readOnly
//                   className="form-control"
//                   rows="3"
//                 />
//               )}

//               <select
//                 className="form-control"
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 required
//               >
//                 <option value="card">💳 Credit / Debit Card</option>
//                 <option value="upi">📱 UPI</option>
//                 <option value="cod">💵 Cash on Delivery</option>
//               </select>

//               {paymentMethod === 'card' ? (
//                 <Elements stripe={stripePromise}>
//                   <StripePayment amount={finalAmount} onSuccess={handlePayment} />
//                 </Elements>
//               ) : (
//                 <form onSubmit={handleCODorUPI}>
//                   <button type="submit" className="btn pay-btn">
//                     Place Order (₹{finalAmount})
//                   </button>
//                 </form>
//                 )}






// {/* GIFT CARD FORM MOVED HERE */}
//       <GiftCardForm onApply={handleGiftCardApply} />
//        <h4 style={{ marginTop: '10px' }}>
//         Total Amount: ₹{finalAmount}
//         {giftCardAmount > 0 && (
//           <span style={{ color: 'green', marginLeft: '10px' }}>
//             (₹{giftCardAmount} gift card applied)
//           </span>
//         )}
//       </h4>
             
//             </>
//           )}



//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;

























import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrders } from '../contexts/OrderContext';
import { useCart } from '../contexts/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePayment from '../components/StripePayment';
import './CheckoutPage.css';
import { API_BASE_URL } from '../config';

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

  // Wallet state
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletLoading, setWalletLoading] = useState(true);
  const [useWallet, setUseWallet] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
      setAddress(storedUser.address || '');
    }
  }, []);

  // Fetch wallet balance
  useEffect(() => {
    const fetchWallet = async () => {
      if (token) {
        setWalletLoading(true);
        try {
          const res = await fetch(`${API_BASE_URL}/api/giftcards/wallet`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const data = await res.json();
          setWalletBalance(data.balance || 0);
        } catch {
          setWalletBalance(0);
        } finally {
          setWalletLoading(false);
        }
      }
    };
    fetchWallet();
  }, [token]);

  if (!user) return <p>Please log in to continue with checkout.</p>;
  if (products.length === 0) return <p>No products selected for checkout.</p>;

  const totalAmount = products.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Wallet deduction logic
  const walletUsed = useWallet ? Math.min(walletBalance, totalAmount) : 0;
  const amountToPay = totalAmount - walletUsed;

  // Main payment handler
  const handlePayment = async (externalAmount) => {
    const finalAddress = useNewAddress ? newAddress : address;

    // 1. Deduct wallet if selected
    if (useWallet && walletUsed > 0) {
      const res = await fetch(`${API_BASE_URL}/api/giftcards/deduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: walletUsed })
      });
      if (!res.ok) {
        alert('Wallet deduction failed');
        return;
      }
      // Update wallet balance in UI
      const data = await res.json();
      setWalletBalance(data.newBalance);
    }

    // 2. Place order (after payment if needed)
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
      paymentMethod: useWallet && amountToPay === 0 ? 'wallet' : paymentMethod,
      walletUsed,
      paidByOther: amountToPay,
      isPaid: amountToPay === 0,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
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
      alert('Order error: ' + err.message);
    }
  };

  // Handler for card/UPI/COD
  const handleCODorUPI = async (e) => {
    e.preventDefault();
    if (amountToPay > 0) {
      // User must pay amountToPay by selected method
      await handlePayment(amountToPay);
    } else {
      // Wallet covers all
      await handlePayment(0);
    }
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

              {/* Wallet Option */}
              <label style={{ marginTop: '1em' }}>
                <input
                  type="checkbox"
                  checked={useWallet}
                  onChange={() => setUseWallet(!useWallet)}
                  disabled={walletLoading || walletBalance === 0}
                />
                {' '}
                Use wallet balance (₹{walletLoading ? '...' : walletBalance.toFixed(2)} available)
              </label>
              {useWallet && (
                <div style={{ margin: '0.5em 0' }}>
                  <div>Wallet used: ₹{walletUsed.toFixed(2)}</div>
                  <div>Amount to pay by other method: ₹{amountToPay.toFixed(2)}</div>
                </div>
              )}

              {/* Payment Method */}
              <select
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
                disabled={amountToPay === 0} // If wallet covers all, no need for other method
              >
                <option value="card">💳 Credit / Debit Card</option>
                <option value="upi">📱 UPI</option>
                <option value="cod">💵 Cash on Delivery</option>
              </select>

              {/* Payment Buttons */}
              {amountToPay > 0 && paymentMethod === 'card' ? (
                <Elements stripe={stripePromise}>
                  <StripePayment amount={amountToPay} onSuccess={() => handlePayment(amountToPay)} />
                </Elements>
              ) : (
                <form onSubmit={handleCODorUPI}>
                  <button type="submit" className="btn pay-btn">
                    Place Order (₹{amountToPay === 0 ? walletUsed : amountToPay})
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
