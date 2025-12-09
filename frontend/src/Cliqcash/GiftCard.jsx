import React, { useEffect, useState } from 'react';

function GiftCard() {
  const [available, setAvailable] = useState([]);
  const [redeemed, setRedeemed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('http://localhost:3000/api/giftcards/my', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setAvailable(data.available || []);
        setRedeemed(data.redeemed || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading gift cards...</div>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">My Gift Cards</h3>

      <h5>Available Gift Cards</h5>
      {available.length === 0 ? (
        <div className="alert alert-info">No available gift cards.</div>
      ) : (
        <div className="row">
          {available.map(card => (
            <div key={card._id} className="col-md-6 mb-3">
              <div className="card border-success">
                <div className="card-body">
                  <h5 className="card-title">Gift Card #{card.code}</h5>
                  <p className="card-text">Amount: ₹{card.amount}</p>
                  <p className="card-text">Status: <strong>Active</strong></p>
                  <p className="card-text">Expiry: {card.expiresAt?.slice(0,10)}</p>
                  <button className="btn btn-sm btn-outline-success" disabled>
                    Not Redeemed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h5 className="mt-4">Redeemed Gift Cards</h5>
      {redeemed.length === 0 ? (
        <div className="alert alert-secondary">No redeemed gift cards.</div>
      ) : (
        <div className="row">
          {redeemed.map(card => (
            <div key={card._id} className="col-md-6 mb-3">
              <div className="card border-secondary">
                <div className="card-body">
                  <h5 className="card-title">Gift Card #{card.code}</h5>
                  <p className="card-text">Amount: ₹{card.amount}</p>
                  <p className="card-text">Status: <strong>Used</strong></p>
                  <p className="card-text">Used At: {card.usedAt?.slice(0,10)}</p>
                  <button className="btn btn-sm btn-outline-secondary" disabled>
                    Already Used
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GiftCard;












// import React, { useEffect, useState } from 'react';

// function GiftCard() {
//   const [available, setAvailable] = useState([]);
//   const [redeemed, setRedeemed] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     fetch('http://localhost:3000/api/giftcards/my', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => {
//         // Sort: newest created first for available, newest used first for redeemed
//         const sortedAvailable = (data.available || []).sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         const sortedRedeemed = (data.redeemed || []).sort(
//           (a, b) => new Date(b.usedAt) - new Date(a.usedAt)
//         );
//         setAvailable(sortedAvailable);
//         setRedeemed(sortedRedeemed);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) return <div>Loading gift cards...</div>;

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-4">My Gift Cards</h3>
//       <div className="row">
//         {/* Left: Available (unused) cards */}
//         <div className="col-md-6">
//           <h5>Available Gift Cards</h5>
//           {available.length === 0 ? (
//             <div className="alert alert-info">No available gift cards.</div>
//           ) : (
//             available.map(card => (
//               <div key={card._id} className="card border-success mb-3">
//                 <div className="card-body">
//                   <h5 className="card-title">Gift Card #{card.code}</h5>
//                   <p className="card-text">Amount: ₹{card.amount}</p>
//                   <p className="card-text">Status: <strong>Active</strong></p>
//                   <p className="card-text">Expiry: {card.expiresAt?.slice(0,10)}</p>
//                   <p className="card-text text-muted">Created: {card.createdAt?.slice(0,10)}</p>
//                   <button className="btn btn-sm btn-outline-success" disabled>
//                     Not Redeemed
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         {/* Right: Redeemed (used) cards */}
//         <div className="col-md-6">
//           <h5>Redeemed Gift Cards</h5>
//           {redeemed.length === 0 ? (
//             <div className="alert alert-secondary">No redeemed gift cards.</div>
//           ) : (
//             redeemed.map(card => (
//               <div key={card._id} className="card border-secondary mb-3">
//                 <div className="card-body">
//                   <h5 className="card-title">Gift Card #{card.code}</h5>
//                   <p className="card-text">Amount: ₹{card.amount}</p>
//                   <p className="card-text">Status: <strong>Used</strong></p>
//                   <p className="card-text">Used At: {card.usedAt?.slice(0,10)}</p>
//                   <p className="card-text text-muted">Created: {card.createdAt?.slice(0,10)}</p>
//                   <button className="btn btn-sm btn-outline-secondary" disabled>
//                     Already Used
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GiftCard;
