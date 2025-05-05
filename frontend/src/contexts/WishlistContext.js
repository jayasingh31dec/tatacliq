import React, { createContext, useContext, useState } from 'react';

// Create the WishlistContext
const WishlistContext = createContext();

// WishlistProvider to wrap your components and provide context values
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add item to wishlist
  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  // Function to remove item from wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use Wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
