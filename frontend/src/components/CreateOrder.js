import React, { useState } from 'react';
import { createOrder } from '../api/orderApi';

function OrderForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        productId: product._id,
        quantity,
        address
      };
      const response = await createOrder(orderData);
      setMessage('Order placed successfully!');
      console.log('Order:', response);
    } catch (err) {
      console.error(err);
      setMessage('Failed to place order.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="mb-2">Price: ₹{product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mb-2 p-1 border"
        required
      />
      <input
        type="text"
        placeholder="Enter shipping address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="mb-2 p-1 border w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Place Order</button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}

export default OrderForm;
