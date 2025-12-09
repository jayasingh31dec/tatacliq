import React from 'react';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="text-center mb-4">We’re a Movement Beyond Style</h2>

      {/* Intro */}
      <p className="lead text-center">
        Tata CLiQ Fashion is more than just an e-commerce platform – it’s at the intersection of style, individuality and impact.
      </p>
      <p>
        In a world where trends are constantly changing, we stand firm, empowering you to define your own narrative.
        The goal is to create a space where fashion is not just worn but lived – where every click brings you closer to expressing your true self.
      </p>

      {/* Vision */}
      <h4 className="mt-5">Our Vision</h4>
      <p>
        We aim to revolutionize fashion by creating a platform where everyone can find their voice, identity and tribe.
        We believe in the power of individuality, the beauty of diversity and the importance of responsible fashion.
        Our vision is an inclusive future where style is more than just an outward impression – it’s an expression of who you are.
      </p>

      {/* Best in Stores */}
      <h4 className="mt-5">Best in Stores</h4>
      <ul>
        <li><strong>CliQ Drip:</strong> Capture attention with Gen Z’s street style picks.</li>
        <li><strong>Sneaker Store:</strong> Slick finishes with hypebeast-approved kicks.</li>
        <li><strong>Indie Finds Store:</strong> Handpicked pieces from homegrown brands blending tradition and modernity.</li>
        <li><strong>Lingerie Store:</strong> Redefine confidence with flattering collections.</li>
        <li><strong>Tata CLiQ Palette:</strong> Curated skincare, makeup, and wellness essentials.</li>
      </ul>

      {/* Options */}
      <h4 className="mt-5">Endless Options, Now Yours</h4>
      <p>
        Explore over 6,000 brands and a wide array of styles for every mood, occasion and moment.
      </p>

      {/* e-Stylist */}
      <h4 className="mt-5">The e-Stylist: Your Fashion Guide</h4>
      <ul>
        <li><strong>Trend Reports:</strong> Stay updated on what's in and what’s next.</li>
        <li><strong>How-to-Style Playbooks:</strong> Wardrobe-building made easy with practical advice.</li>
        <li><strong>Care & Maintenance Guides:</strong> Keep fashion timeless with our expert tips.</li>
        <li><strong>Curated Shopping Lists:</strong> Trendy picks tailored to your personal style.</li>
      </ul>

      {/* Shopping Journey */}
      <h4 className="mt-5">An Effortless Shopping Journey</h4>
      <p>
        Navigate seamlessly with curated category and brand pages, crafted to deliver a trend-driven experience.
        Our goal: To help you discover your perfect style with ease.
      </p>

      {/* Footer links */}
      <div className="mt-5 border-top pt-3 d-flex flex-column flex-md-row justify-content-center gap-4 text-center">
        <a href="#" className="text-decoration-none text-dark">Contact Us</a>
        <a href="#" className="text-decoration-none text-dark">About Us</a>
        <a href="#" className="text-decoration-none text-dark">Customer Care</a>
      </div>
    </div>
  );
}


