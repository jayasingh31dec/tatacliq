import React, { useState, useEffect } from 'react';
import { createOrder } from '../services/orderService'; // Import the service

const PlaceOrder = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentDetail, setPaymentDetail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    // Fetch products from backend (You can replace with actual API call)
    setProducts([
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 150 },
    ]);
  }, []);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await createOrder(selectedProduct, quantity);
      console.log('Order placed successfully:', response);
      alert('Order Placed!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };

  return (
    <div>
      <h1>Place Order</h1>
      <form onSubmit={handleOrder}>
        <div>
          <label>Select Product:</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - ₹{product.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>

        <div>
          <label>Payment Details:</label>
          <input
            type="text"
            placeholder="Card number / UPI ID"
            value={paymentDetail}
            onChange={(e) => setPaymentDetail(e.target.value)}
          />
        </div>

        <div>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="COD">Cash on Delivery</option>
            <option value="Card">Credit/Debit Card</option>
          </select>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;
