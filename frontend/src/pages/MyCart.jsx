import React from 'react';
import { useCart } from '../contexts/CartContext';
import './MyCart.css';
import { useNavigate } from 'react-router-dom'; // ✅ Corrected

function MyCart() {
  const { cartItems, removeFromCart, incrementItem, decrementItem } = useCart();
  const navigate = useNavigate(); // ✅ useNavigate hook

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    navigate('/CheckoutPage', { state: { products: cartItems } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>Size: <strong>{item.size}</strong></p>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementItem(item)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => incrementItem(item)}>+</button>
                </div>




                {/* remove from card button */}



                <button
                  className="btn btn-danger rounded px-4 py-2"
                  type="button"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>

            </div>

          ))}
          <hr />
          <h3>Total Price: ₹{totalPrice}</h3>
          {/* ✅ Place Order Button for all cart items */}
          <button
            className="btn btn-success px-4 py-2 mt-3"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default MyCart;
