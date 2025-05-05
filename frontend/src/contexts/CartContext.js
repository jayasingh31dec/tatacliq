import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cartItems: [],  // This will store items in the cart
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Adding new item to cart
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id), // Removing item based on id
      };

    case 'INCREMENT_ITEM':
      // Increment the quantity of the item with matching id
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 } // Increment only the matching item
            : item
        ),
      };

    case 'DECREMENT_ITEM':
      // Decrement the quantity of the item with matching id, making sure it doesn't go below 1
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } // Decrement only the matching item
            : item
        ),
      };

    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add to cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Remove one item completely
  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  // Increase quantity (add one more same item)
  const incrementItem = (itemId) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: { id: itemId } });
  };

  // Decrease quantity
  const decrementItem = (itemId) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: { id: itemId } });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, incrementItem, decrementItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
