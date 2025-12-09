// import React, { useState } from 'react';
// import axios from 'axios';

// function AddGiftCard() {
//   const [code, setCode] = useState('');
//   const [pin, setPin] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (!/^\d{16}$/.test(code)) {
//       setMessage('Code must be 16 digits.');
//       return;
//     }
//     if (!/^\d{4}$/.test(pin)) {
//       setMessage('PIN must be 4 digits.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.post(
//         'http://localhost:3000/api/giftcards/redeem',
//         { code: code.trim(), pin: pin.trim() },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMessage('Gift card redeemed: ₹' + res.data.amount);
//       setCode('');
//       setPin('');
//       if (onRedeem) onRedeem(); // <-- Refresh wallet balance!
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Error redeeming card');
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit} className="mb-2">
//       <input
//         type="text"
//         placeholder="16-digit Code"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         maxLength={16}
//         className="form-control mb-1"
//       />
//       <input
//         type="password"
//         placeholder="4-digit PIN"
//         value={pin}
//         onChange={(e) => setPin(e.target.value)}
//         maxLength={4}
//         className="form-control mb-1"
//       />
//       <button type="submit"className="btn btn-primary">Redeem</button>
//       {message && <div className="mt-2">{message}</div>}
//     </form>
//   );
// }

// export default AddGiftCard;






















import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function AddGiftCard({ onRedeem }) {
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{16}$/.test(code)) {
      setMessage('Code must be 16 digits.');
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      setMessage('PIN must be 4 digits.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API_BASE_URL}/api/giftcards/redeem`,
        { code: code.trim(), pin: pin.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Gift card redeemed: ₹' + res.data.amount);
      setCode('');
      setPin('');
      if (onRedeem) onRedeem(); // <-- Now works!
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error redeeming card');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        placeholder="16-digit Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={16}
        className="form-control mb-1"
      />
      <input
        type="password"
        placeholder="4-digit PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength={4}
        className="form-control mb-1"
      />
      <button type="submit" className="btn btn-primary">Redeem</button>
      {message && <div className="mt-2">{message}</div>}
    </form>
  );
}

export default AddGiftCard;



