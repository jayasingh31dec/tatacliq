import { useState, useEffect } from 'react';
import axios from 'axios';

const GiftCardForm = ({ onApply }) => {
  const [code, setCode] = useState('');
  const [giftCards, setGiftCards] = useState([]);
  const [message, setMessage] = useState('');
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const fetchGiftCards = async () => {
      const { data } = await axios.get('http://localhost:3000/api/giftcards/available');
      setGiftCards(data);
    };
    const fetchWallet = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/users/wallet', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setWalletBalance(data.balance);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGiftCards();
    fetchWallet();
  }, []);

  const applyGiftCard = async (selectedCode) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/giftcards/redeem',
        { code: selectedCode || code },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setMessage(`✅ ₹${data.amount} gift card applied!`);
      onApply(data.amount);
      setWalletBalance((prev) => prev + data.amount);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
     <div className="gift-card-form">
    <h4>Apply Gift Card</h4>

    <input
      type="text"
      placeholder="Enter gift card code"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
    <button onClick={() => applyGiftCard()}>Apply</button>

    <p>{message}</p>
    {walletBalance !== null && <p>Your wallet balance: ₹{walletBalance}</p>}

    <hr />
    <h5>Available Gift Cards:</h5>
    {giftCards.length > 0 ? (
      giftCards.map((card) => (
        <div key={card._id} className="available-card">
          <strong>{card.code}</strong> — ₹{card.amount} (expires on {card.expiresAt.slice(0, 10)})
          <button style={{ marginLeft: '10px' }} onClick={() => applyGiftCard(card.code)}>Apply</button>
        </div>
      ))
    ) : (
      <p>No available gift cards.</p>
    )}
  </div>
);












};

export default GiftCardForm;
