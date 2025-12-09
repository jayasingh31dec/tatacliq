import React from 'react';

import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h2 className="privacy-title">Privacy Notice & Privacy Policy</h2>

      <section className="privacy-section">
        <p>
          Tata UniStore Limited (“TUL” or “we”) takes the privacy of your information seriously. This Privacy Notice
          describes the data we collect from you through our website, including sub-domains, microsites, and mobile
          applications (“Platforms”).
        </p>
        <p>
          It also describes the purposes for which we collect that personal information, the other parties with whom we may
          share it, and the measures we take to protect the security of your data. It also tells you about your rights and
          choices with respect to your personal information, and how you can contact us about our privacy practices.
        </p>
      </section>

      {/* Add more sections if needed */}
      <Footer />
    </div>
  );
}
