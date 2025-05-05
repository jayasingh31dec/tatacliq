import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import './MyWishlist.css';

function MyWishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      
      {/* Check if wishlist is empty */}
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

                {/* Remove button functionality */}
                <button
                  className="remove-button"
                  onClick={() => removeFromWishlist(item.id)}
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
