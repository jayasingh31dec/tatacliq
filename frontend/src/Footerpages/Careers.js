import React from 'react';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">JOIN US</h2>
      
      <section className="mb-6">
        <p className="mb-4">
          At <strong>Tata Unistore</strong>, we are dedicated to excellence and innovation in every aspect of the online business, 
          from fashion and technology to the creative arts and logistics.
        </p>
        <p className="mb-4">
          Working with us means staying ahead of trends and moving quickly in a unique and fast-paced environment, 
          in one of a variety of challenging and fulfilling roles.
        </p>
        <p className="mb-4">
          We are constantly looking for talented individuals who will help us take our business to the next level, 
          and keep us at the forefront of the digital domain. 
        </p>
        <p className="mb-4">
          Explore job opportunities with us:{" "}
          <a 
            href="https://cliqonnect.darwinbox.in/ms/candidate/careers" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline"
          >
            Click here to view current openings
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">BEWARE OF FAKE JOB OFFERS</h3>
        <p className="mb-4">
          Tata UniStore Limited (‘TUL’) owns and operates an online e-commerce portal under the brand names of 
          <strong> Tata CLiQ Fashion </strong> and <strong> Tata CLiQ Luxury </strong>.
        </p>
        <p className="mb-4">
          Our attention has been drawn to fraudulent individuals/agencies/job portals that are offering fake job opportunities 
          using the Tata name and logo. Please note:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>We do <strong>not</strong> ask for money or security deposits from job applicants.</li>
          <li>Recruitment is done only through official channels and verified sources.</li>
          <li>Be cautious of unsolicited emails, phone calls, or messages asking for payment or personal information.</li>
        </ul>
        <p className="mb-4">
          If you receive any suspicious communication, please verify its authenticity and do not respond to fraudulent requests.
        </p>
        <p className="text-red-600 font-semibold">
          TUL is not responsible for any loss or damage resulting from fake job offers.
        </p>
      </section>

      <Footer />
    </div>
  );
}
