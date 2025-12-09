import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import './MyWishlist.css';

function MyWishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    const itemWithQuantity = { ...item, quantity: 1 }; // 👈 quantity add karna useful hai
    addToCart(itemWithQuantity);
    alert("Item added to cart!");
  };

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p>Your Wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <div className="wishlist-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
              </div>

              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>

                {/* ✅ Add to Cart Button */}
                <button
                  className="add-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>

                {/* ❌ Remove from Wishlist Button */}
                <button
                  className="remove-button"
                  onClick={() => removeFromWishlist(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyWishlist;
