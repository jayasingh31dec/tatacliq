import React from 'react';
import { Link } from 'react-router-dom';

function TopNavbar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-dark text-white">
      {/* Logo Image */}
      <div className="fw-bold fs-5">
        <Link to="/" className="text-white text-decoration-none">
          <img 
            src="https://images.cnbctv18.com/uploads/2024/11/tata-cliq-2024-11-1eb799ff3f65e217447251320089c8f1.jpg" 
            alt="My Logo" 
            style={{ height: '40px' }} 
          />
        </Link>
      </div>



    


      {/* Authentication Links */}
      <div>
        
        <Link to="/login" className="text-white text-decoration-none me-3">Sign In  /</Link>
        <Link to="/signup" className="text-white text-decoration-none">Sign Up</Link>
      
      </div>

      {/* Mobile Menu Button (hidden on desktop) */}
      <div className="d-lg-none">
        <button className="btn btn-link text-white">
          <i className="bi bi-list fs-4"></i>
        </button>
      </div>
    </div>
  );
}

export default TopNavbar;
