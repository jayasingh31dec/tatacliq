import React, { useState } from 'react';
import './AddGiftCard.css'; // Optional CSS file for additional styling

function AddGiftCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated validation
    if (cardNumber && pin) {
      setMessage('🎉 Gift card added successfully!');
      // Later you can send this to backend via API call
      setCardNumber('');
      setPin('');
    } else {
      setMessage('❗ Please enter both Gift Card Number and PIN.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-4">Add Gift Card</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Gift Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter 16-digit card number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pin" className="form-label">PIN</label>
              <input
                type="password"
                id="pin"
                className="form-control"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter 4-digit PIN"
              />
            </div>

            <button type="submit" className="btn btn-dark">Add to Wallet</button>
          </form>

          {message && (
            <div className="alert alert-info mt-3" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddGiftCard;
