import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './StripePayment.css'; // Import your custom CSS for styling

function StripePayment({ amount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    if (result.error) {
      alert('❌ Payment Failed: ' + result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('✅ Payment Successful!');
      onSuccess(); // Call the placeOrder logic
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-payment-form">
      <div className="card-element-wrapper">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#333',
                '::placeholder': {
                  color: '#888',
                },
                padding: '10px',
              },
              invalid: {
                color: '#e53935',
              },
            },
          }}
        />
      </div>
      <button type="submit" disabled={!stripe} className="btn pay-btn">
        Pay ₹{amount}
      </button>
    </form>
  );
}

export default StripePayment;
