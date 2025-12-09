// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-5 mt-auto">
//       <div className="container">
//         <div className="row">

//           {/* Tata Marketplace */}
//           <div className="col-md-3 mb-4">
//             <h5 className="fw-bold">Tata Marketplace</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></li>
//               <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
//               <li><Link to="/Terms" className="text-light text-decoration-none">Terms of Use</Link></li>
//               <li><Link to="/PrivacyPolicy" className="text-light text-decoration-none">Privacy Policy</Link></li>
//               <li><a href="#" className="text-light text-decoration-none">Affiliates</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div className="col-md-3 mb-4">
//             <h5 className="fw-bold">Customer Service</h5>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-light text-decoration-none">Shopping</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Offers & Promotions</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Payments</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Cancellation</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Returns & Refunds</a></li>
//               <li><a href="#" className="text-light text-decoration-none">CII and PQ</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Returns Policy</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Electronics Return Policy</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Reviews Guidelines</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Furniture Return Policy</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Replacement Policy</a></li>
//             </ul>
//           </div>

//           {/* My Tata CLiQ */}
//           <div className="col-md-3 mb-4">
//             <h5 className="fw-bold">My Tata CLiQ</h5>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-light text-decoration-none">My Account</a></li>
//               <li><a href="#" className="text-light text-decoration-none">My Orders</a></li>
//               <li><a href="#" className="text-light text-decoration-none">My Shopping Bag</a></li>
//               <li><a href="#" className="text-light text-decoration-none">My Wishlist</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="col-md-3 mb-4">
//             <h5 className="fw-bold">Follow Us</h5>
//             <div className="d-flex gap-3 fs-5">
//               <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
//               <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
//               <a href="#" className="text-light"><i className="bi bi-twitter-x"></i></a>
//               <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
//             </div>
//           </div>
//         </div>

//         <hr className="border-secondary my-4" />

//         {/* Informational Text */}
//         <div className="text-start small ">
//           <p><strong>Tata CLiQ FASHION: Shop Online with India's most trusted destination</strong><br />
//             Genuine products from all the top brands get delivered right to your doorstep...
//           </p>
//           <p><strong>Online Shopping: Fast & convenient with the click of a button</strong><br />
//             The upside of online shopping at Tata CLiQ FASHION...
//           </p>
//           <p><strong>Tata CLiQ FASHION Shopping App: just a few clicks on Android & iOS</strong><br />
//             Download the Android app from the Play Store...
//           </p>
//           <p><strong>Tata CLiQ FASHION: The most genuine place for Fashion and Lifestyle</strong><br />
//             With an exclusive Brand Store for watches...
//           </p>
//         </div>

//         {/* Footer Note */}
//         <div className="text-center mt-4 small">
//           <p>© 2025 TataCliq. All rights reserved. | Designed for learning purpose only</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



















import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">

          {/* Navigation Links */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
             
              <li><Link to="/PrivacyPolicy" className="text-light text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://www.facebook.com/" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" className="text-light"><i className="bi bi-instagram"></i></a>
              <a href="https://x.com/" className="text-light"><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.youtube.com/" className="text-light"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Note */}
        <div className="text-center mt-3 small">
          <p>© 2025 TataCliq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

