import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* TataCliq Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Tata CLiQ</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sell with Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Help Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Help</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Track Orders</a></li>
              <li><a href="#" className="text-light text-decoration-none">Customer Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Menswear</a></li>
              <li><a href="#" className="text-light text-decoration-none">Womenswear</a></li>
              <li><a href="#" className="text-light text-decoration-none">Footwear</a></li>
              <li><a href="#" className="text-light text-decoration-none">Watches</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-5">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />
        <div className="text-center small">
          <p>© 2025 TataCliq. All rights reserved. | Designed for learning purpose only</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
