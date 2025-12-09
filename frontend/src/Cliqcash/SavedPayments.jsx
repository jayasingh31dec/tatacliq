import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

function SavedPayments() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userToken'); // adjust key as per your app

    fetch(`${API_BASE_URL}/api/users/payments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to fetch payments');
        }
        return res.json();
      })
      .then((data) => {
        setPayments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading saved payments...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Saved Payments</h2>

      {payments.length === 0 ? (
        <p>No saved payment methods found.</p>
      ) : (
        <ul className="list-group">
          {payments.map((payment) => (
            <li key={payment.id} className="list-group-item mb-3">
              <strong>Payment Method:</strong> {payment.method.toUpperCase()}

              {payment.method === 'card' && (
                <div className="mt-2">
                  <p>Card Holder: {payment.cardHolder}</p>
                  <p>Card Number: **** **** **** {payment.cardNumber.slice(-4)}</p>
                  <p>Expiry: {payment.expiry}</p>
                </div>
              )}

              {payment.method === 'upi' && (
                <div className="mt-2">
                  <p>UPI ID: {payment.upiId}</p>
                </div>
              )}

              {payment.method === 'cod' && (
                <p className="mt-2">Cash on Delivery (Pay at delivery)</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedPayments;
