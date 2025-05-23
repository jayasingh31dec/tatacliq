import React, { useState } from 'react';

function BuyGiftCard() {
  const [formData, setFormData] = useState({
    amount: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { amount, recipientName, recipientEmail } = formData;

    if (amount && recipientName && recipientEmail) {
      setConfirmation(`🎉 Gift card worth ₹${amount} has been sent to ${recipientEmail}.`);
      setFormData({ amount: '', recipientName: '', recipientEmail: '', message: '' });
    } else {
      setConfirmation('❗ Please fill in all required fields.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-4">Buy a Gift Card</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Select Amount (₹)</label>
              <select
                id="amount"
                name="amount"
                className="form-select"
                value={formData.amount}
                onChange={handleChange}
              >
                <option value="">-- Choose Amount --</option>
                <option value="500">₹500</option>
                <option value="1000">₹1000</option>
                <option value="2000">₹2000</option>
                <option value="5000">₹5000</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="recipientName" className="form-label">Recipient Name</label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                className="form-control"
                value={formData.recipientName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="recipientEmail" className="form-label">Recipient Email</label>
              <input
                type="email"
                id="recipientEmail"
                name="recipientEmail"
                className="form-control"
                value={formData.recipientEmail}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-dark">Buy Now</button>
          </form>

          {confirmation && (
            <div className="alert alert-info mt-3" role="alert">
              {confirmation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyGiftCard;
