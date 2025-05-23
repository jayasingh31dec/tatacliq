import React from 'react';

function Alerts() {
  // Sample static data for alerts & coupons
  const alerts = [
    { id: 1, type: 'Offer', message: 'Flat ₹200 off on orders above ₹999.', validTill: '31 May 2025' },
    { id: 2, type: 'Coupon', message: 'Use code WELCOME10 for 10% off.', validTill: '30 June 2025' },
    { id: 3, type: 'Alert', message: 'Your wishlist item is back in stock!', validTill: 'N/A' },
  ];

  return (
    <div className="container mt-4">
      <h3>Alerts & Coupons</h3>
      <p className="text-muted">Check out your personalized alerts and available coupons below.</p>

      {alerts.length === 0 ? (
        <div className="alert alert-info">No alerts or coupons available.</div>
      ) : (
        <div className="list-group">
          {alerts.map(alert => (
            <div key={alert.id} className="list-group-item list-group-item-action mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{alert.type}</h5>
                  <p className="mb-1">{alert.message}</p>
                  <small className="text-muted">Valid Till: {alert.validTill}</small>
                </div>
                {alert.type === 'Coupon' && (
                  <button className="btn btn-outline-dark btn-sm">Copy Code</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Alerts;
