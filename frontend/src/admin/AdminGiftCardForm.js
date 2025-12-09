// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminGiftCardForm = () => {
//   const [code, setCode] = useState('');
//   const [amount, setAmount] = useState('');
//   const [expiresAt, setExpiresAt] = useState('');
//   const [message, setMessage] = useState('');

//   const handleCreate = async () => {
//     try {
//       const { data } = await axios.post(
//         'http://localhost:3000/api/giftcards/create',
//         { code, amount, expiresAt },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // 👈 Make sure admin is logged in
//           },
//         }
//       );

//       setMessage(`🎁 Gift card '${data.code}' created for ₹${data.amount}`);
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error creating gift card');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px' }}>
//       <h2>Create Gift Card</h2>
//       <input
//         type="text"
//         placeholder="Code (e.g., NEWUSER100)"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//       />
//       <input
//         type="number"
//         placeholder="Amount (e.g., 100)"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//       />
//       <input
//         type="date"
//         value={expiresAt}
//         onChange={(e) => setExpiresAt(e.target.value)}
//         style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//       />
//       <button onClick={handleCreate} style={{ padding: '10px 20px' }}>
//         Create Gift Card
//       </button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default AdminGiftCardForm;











































import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const AdminGiftCardForm = () => {
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');
  const [amount, setAmount] = useState('');
  const [expiresAt, setExpiresAt] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Helper: Generate random 16-digit code and 4-digit PIN
  const generateCode = () => String(Math.floor(1000000000000000 + Math.random() * 9000000000000000));
  const generatePin = () => String(Math.floor(1000 + Math.random() * 9000));

  const handleAutoFill = () => {
    setCode(generateCode());
    setPin(generatePin());
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setMessage('');

    // Validation
    if (!/^\d{16}$/.test(code)) {
      setMessage('Code must be exactly 16 digits.');
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      setMessage('PIN must be exactly 4 digits.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setMessage('Enter a valid amount.');
      return;
    }
    if (!expiresAt) {
      setMessage('Please select expiry date.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/giftcards/create`,
        { code, pin, amount: Number(amount), expiresAt },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          },
        }
      );
      setMessage(`🎁 Gift card '${data.code}' (PIN: ${data.pin}) created for ₹${data.amount}`);
      setCode('');
      setPin('');
      setAmount('');
      setExpiresAt('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating gift card');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Create Gift Card</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="16-digit Code"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 16))}
          maxLength={16}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="4-digit PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
          maxLength={4}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button
          type="button"
          onClick={handleAutoFill}
          style={{ marginBottom: '10px', padding: '5px 12px', background: '#eee', border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Auto-generate Code & PIN
        </button>
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
        <button type="submit" style={{ padding: '10px 20px' }} disabled={loading}>
          {loading ? 'Creating...' : 'Create Gift Card'}
        </button>
      </form>
      <p style={{ color: message.startsWith('🎁') ? 'green' : 'red' }}>{message}</p>
    </div>
  );
};

export default AdminGiftCardForm;
