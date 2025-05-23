import React, { useState } from 'react';
import axios from 'axios';

const AdminGiftCardForm = () => {
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');
  const [expiresAt, setExpiresAt] = useState('');
  const [message, setMessage] = useState('');

  const handleCreate = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/giftcards/create',
        { code, amount, expiresAt },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // 👈 Make sure admin is logged in
          },
        }
      );

      setMessage(`🎁 Gift card '${data.code}' created for ₹${data.amount}`);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating gift card');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Create Gift Card</h2>
      <input
        type="text"
        placeholder="Code (e.g., NEWUSER100)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="number"
        placeholder="Amount (e.g., 100)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="date"
        value={expiresAt}
        onChange={(e) => setExpiresAt(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={handleCreate} style={{ padding: '10px 20px' }}>
        Create Gift Card
      </button>
      <p>{message}</p>
    </div>
  );
};

export default AdminGiftCardForm;
