import React, { createContext, useContext, useState } from 'react';

const userOrderContext = createContext();

export const useOrders = () => useContext(userOrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  return (
    <userOrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </userOrderContext.Provider>
  );
};
