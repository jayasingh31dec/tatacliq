import React, { createContext, useContext, useState } from 'react';

// Create the WishlistContext
const WishlistContext = createContext();

// WishlistProvider to wrap your components and provide context values
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add item to wishlist
  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
    alert("Item added to wishlist!");
  };



  

  // Function to remove item from wishlist
  const removeFromWishlist = (targetItem) => {
    setWishlistItems(prev =>
      prev.filter(item =>
        !(
          item.name === targetItem.name &&
          item.brand === targetItem.brand &&
          item.price === targetItem.price &&
          item.image === targetItem.image &&
          item.description === targetItem.description &&
          item.category === targetItem.category &&
          item.subcategory === targetItem.subcategory &&
          item.item === targetItem.item
        )
      )
    );
    alert("Item removed from wishlist!");
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
