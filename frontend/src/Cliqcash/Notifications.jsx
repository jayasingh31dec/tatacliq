import React, { useState } from 'react';

function Notifications() {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggle = (type) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Manage Notifications</h3>

      <div className="card mb-3">
        <div className="card-body">
          <h5>Email Notifications</h5>
          <p>Get updates, offers, and order info via email.</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="emailSwitch"
              checked={preferences.email}
              onChange={() => handleToggle('email')}
            />
            <label className="form-check-label" htmlFor="emailSwitch">
              {preferences.email ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5>SMS Notifications</h5>
          <p>Get delivery updates and OTPs via SMS.</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="smsSwitch"
              checked={preferences.sms}
              onChange={() => handleToggle('sms')}
            />
            <label className="form-check-label" htmlFor="smsSwitch">
              {preferences.sms ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5>Push Notifications</h5>
          <p>Receive alerts directly on your browser or app.</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="pushSwitch"
              checked={preferences.push}
              onChange={() => handleToggle('push')}
            />
            <label className="form-check-label" htmlFor="pushSwitch">
              {preferences.push ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
