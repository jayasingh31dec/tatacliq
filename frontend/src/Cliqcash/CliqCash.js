// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CliqCash.css'; // optional CSS for styling




// import React, { useEffect, useState } from 'react';
// import Wallet from './Wallet';
// import AddGiftCard from './AddGiftCard';





// function CliqCash() {
 
//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   const name = user.name || "Guest";
//   const email = user.email || "N/A";
//   const [balance, setBalance] = useState(null);







//  // Fetch balance function
//   const fetchBalance = async () => {
//     try{
//       const token = localStorage.getItem('token');
//       const res = await fetch('http://localhost:3000/api/giftcards/wallet', {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     const data = await res.json();
//     setBalance(data.balance);

//     }catch (err) {
//       setBalance(0); // fallback
//     }
//   };
    
    
    


//   useEffect(() => {
//     fetchBalance();
//   }, []);










//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3">
//           <div className="list-group">
//             <Link to="/wishlist" className="list-group-item">My Wishlist</Link>
//             <Link to="/my-orders" className="list-group-item">Order History</Link>
//             <Link to="/address-book" className="list-group-item">Address Book</Link>
//             {/* <Link to="/saved-payments" className="list-group-item">Saved Payments</Link> */}
//             <Link to="/alerts" className="list-group-item">Alerts & Coupons</Link>
//             <Link to="/gift-card" className="list-group-item">Gift Card</Link>
//             <Link to="/cliq-cash" className="list-group-item">CLiQ Cash</Link>
//             <Link to="/notifications" className="list-group-item">Manage Notifications</Link>
//             <Link to="/profile" className="list-group-item">Profile</Link>
            
          

//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-9">
//           {/* Wallet Info */}
//           <div className="card mb-3">
//             <div className="card-body">
//               <h5>CLiQ Cash Wallet</h5>
//                <Wallet balance={balance} />
//               <p>A quick and convenient way for faster checkout and refund.</p>
//             </div>
//           </div>

//           {/* Gift Card Actions */}
//           <div className="card mb-3">
//             <div className="card-body">
//               <h5>Gift Cards</h5>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <p>Add Gift Card Balance</p>
//                   <AddGiftCard onRedeem={fetchBalance} />
//                 </div>
//                 <div>


//                   <p>Send Gift Card</p>
//                    <Link to="/buy-gift-card" className="btn btn-outline-dark">Buy gift card</Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Advantages */}
//           <div className="card mb-3">
//             <div className="card-body">
//               <h5>The CLiQ Cash Advantage</h5>
//               <ul>
//                 <li>Faster Checkout</li>
//                 <li>Faster Refunds</li>
//                 <li>Consolidated Wallet</li>
//                 <li>Safe & Secure</li>
//               </ul>
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="card">
//             <div className="card-body">
//               <h5>Please Note</h5>
//               <p>CLiQ Cash can’t be cancelled or transferred to another account.</p>
//               <p>It can’t be withdrawn in the form of cash or transferred to a bank account.</p>
//               <p>Only Indian credit/debit/net-banking is supported for top-ups.</p>
//               <p>CLiQ Cash has an expiration date. Check FAQs for details.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default CliqCash;

















// CliqCash.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wallet from './Wallet';
import AddGiftCard from './AddGiftCard';
import './CliqCash.css'; // optional

function CliqCash() {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const name = user.name || "Guest";
  const email = user.email || "N/A";
  const [balance, setBalance] = useState(null);

  // Fetch balance function
  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3000/api/giftcards/wallet', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setBalance(data.balance);
    } catch (err) {
      setBalance(0); // fallback
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to="/wishlist" className="list-group-item">My Wishlist</Link>
            <Link to="/my-orders" className="list-group-item">Order History</Link>
            <Link to="/address-book" className="list-group-item">Address Book</Link>
            <Link to="/alerts" className="list-group-item">Alerts & Coupons</Link>
            <Link to="/gift-card" className="list-group-item">Gift Card</Link>
            <Link to="/cliq-cash" className="list-group-item">CLiQ Cash</Link>
            
            <Link to="/profile" className="list-group-item">Profile</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Wallet Info */}
          <div className="card mb-3">
            <div className="card-body">
              <h5>CLiQ Cash Wallet</h5>
              <Wallet balance={balance} />
              <p>A quick and convenient way for faster checkout and refund.</p>
            </div>
          </div>

          {/* Gift Card Actions */}
          <div className="card mb-3">
            <div className="card-body">
              <h5>Gift Cards</h5>
              <div className="d-flex justify-content-between">
                <div>
                  <p>Add Gift Card Balance</p>
                  <AddGiftCard onRedeem={fetchBalance} />
                </div>
                <div>
                  <p>Send Gift Card</p>
                  <Link to="/buy-gift-card" className="btn btn-outline-dark">Buy gift card</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="card mb-3">
            <div className="card-body">
              <h5>The CLiQ Cash Advantage</h5>
              <ul>
                <li>Faster Checkout</li>
                <li>Faster Refunds</li>
                <li>Consolidated Wallet</li>
                <li>Safe & Secure</li>
              </ul>
            </div>
          </div>

          {/* Notes */}
          <div className="card">
            <div className="card-body">
              <h5>Please Note</h5>
              <p>CLiQ Cash can’t be cancelled or transferred to another account.</p>
              <p>It can’t be withdrawn in the form of cash or transferred to a bank account.</p>
              <p>Only Indian credit/debit/net-banking is supported for top-ups.</p>
              <p>CLiQ Cash has an expiration date. Check FAQs for details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CliqCash;
