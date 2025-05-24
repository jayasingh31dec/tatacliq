// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Wallet({ balance }) {
//   const [balance, setBalance] = useState(null);
//   useEffect(() => {
//     const fetchBalance = async () => {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:3000/api/giftcards/wallet', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setBalance(res.data.balance);
//     };
//     fetchBalance();
//   }, []);
//   return (
//     <div>
//       <strong>Total Available Balance:</strong>{' '}
//       <span className="text-success">
//         ₹{balance !== null ? balance.toFixed(2) : 'Loading...'}
//       </span>

//     </div>
//   <div>Wallet Balance: ₹{balance !== null ? balance : 'Loading...'}</div>;
// }
// );
// export default Wallet;











// Wallet.js
import React from 'react';

function Wallet({ balance }) {
  return (
    <div>
      <strong>Total Available Balance:</strong>{' '}
      <span className="text-success">
        ₹{balance !== null ? Number(balance).toFixed(2) : 'Loading...'}
      </span>
    </div>
  );
}

export default Wallet;

