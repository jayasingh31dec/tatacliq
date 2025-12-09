import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cartItems: [], // This will store items in the cart
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {













  case 'ADD_TO_CART':
  const existingIndex = state.cartItems.findIndex(
    item => item._id === action.payload._id && item.size === action.payload.size
  );

  if (existingIndex !== -1) {
    const updatedItems = [...state.cartItems];

    // Get current quantity from state
    const currentQty = updatedItems[existingIndex].quantity || 1;

    updatedItems[existingIndex] = {
      ...updatedItems[existingIndex],
      quantity: currentQty + 1,
    };

    return {
      ...state,
      cartItems: updatedItems,
    };
  } else {
    return {
      ...state,
      // Set initial quantity to 1, ignore action.payload.quantity if present
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
    };
  }












    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item =>
          !(
            item.name === action.payload.name &&
            item.brand === action.payload.brand &&
            item.price === action.payload.price &&
            item.image === action.payload.image &&
            item.description === action.payload.description &&
            item.category === action.payload.category &&
            item.subcategory === action.payload.subcategory &&
            item.item === action.payload.item
          )
        ),
      };

    case 'INCREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.name === action.payload.name &&
          item.brand === action.payload.brand &&
          item.price === action.payload.price &&
          item.image === action.payload.image &&
          item.description === action.payload.description &&
          item.category === action.payload.category &&
          item.subcategory === action.payload.subcategory &&
          item.item === action.payload.item
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        ),
      };

    case 'DECREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.name === action.payload.name &&
          item.brand === action.payload.brand &&
          item.price === action.payload.price &&
          item.image === action.payload.image &&
          item.description === action.payload.description &&
          item.category === action.payload.category &&
          item.subcategory === action.payload.subcategory &&
          item.item === action.payload.item
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };



      case 'CLEAR_CART':
  return {
    ...state,
    cartItems: [], // empty cart
  };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  
  const clearCart = () => {
  dispatch({ type: 'CLEAR_CART' });
};



  // Add item to cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  // Increase quantity
  const incrementItem = (item) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: item });
  };

  // Decrease quantity
  const decrementItem = (item) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
