import React, { useState } from 'react';

function GiftCard() {
  const [giftCards, setGiftCards] = useState([
    {
      id: 'GC123456',
      amount: 1000,
      status: 'Active',
      expiry: '2025-12-31'
    },
    {
      id: 'GC789012',
      amount: 500,
      status: 'Used',
      expiry: '2024-10-15'
    }
  ]);

  // Function to handle gift card use
  const handleUseGiftCard = (cardId) => {
    setGiftCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId
          ? { ...card, status: 'Used' } // Update status to 'Used'
          : card
      )
    );
    alert(`✅ Gift card ${cardId} used successfully!`);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">My Gift Cards</h3>

      {giftCards.length === 0 ? (
        <div className="alert alert-info">You have no gift cards at the moment.</div>
      ) : (
        <div className="row">
          {giftCards.map(card => (
            <div key={card.id} className="col-md-6 mb-3">
              <div className={`card border-${card.status === 'Active' ? 'success' : 'secondary'}`}>
                <div className="card-body">
                  <h5 className="card-title">Gift Card #{card.id}</h5>
                  <p className="card-text">Amount: ₹{card.amount}</p>
                  <p className="card-text">Status: <strong>{card.status}</strong></p>
                  <p className="card-text">Expiry: {card.expiry}</p>
                  {card.status === 'Active' && (
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleUseGiftCard(card.id)}
                    >
                      Use Now
                    </button>
                  )}
                  {card.status === 'Used' && (
                    <button className="btn btn-sm btn-outline-secondary" disabled>
                      Already Used
                    </button>
                  )}
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
