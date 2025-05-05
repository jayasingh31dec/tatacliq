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

  const handleBuyNow = (product) => {
    navigate('/CheckoutPage', { state: { product } });
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
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementItem(item.id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => incrementItem(item.id)}>+</button>
                </div>

                {/* buy noiw button */}


                <div className="d-flex gap-3 mt-2">
                  <button
                    className="btn btn-primary px-3 py-2"
                    type="button"
                    onClick={() => handleBuyNow(item)} // ✅ correct item bhejna
                  >
                    Buy Now
                  </button>



                  {/* remove from card button */}



                  <button
                    className="btn btn-danger rounded px-4 py-2"
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))}
          <hr />
          <h3>Total Price: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default MyCart;
