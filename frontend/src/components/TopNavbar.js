import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../logo/download.2.png';
import { PiUserCircleFill } from "react-icons/pi";




function TopNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // On mount, check user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }

    // Listen to login event
    const handleUserLogin = () => {
      const newUser = localStorage.getItem('user');
      if (newUser) {
        const parsed = JSON.parse(newUser);
        setUserName(parsed.name);
      }
    };

    window.addEventListener("userLoggedIn", handleUserLogin);

    return () => {
      window.removeEventListener("userLoggedIn", handleUserLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token'); 
    setUserName(null);
    navigate('/');
  };

  return (
    <div className="bg-dark text-white">
      <div className="d-flex align-items-center px-1 py-1">
        {/* Logo */}
        <div className="logo-header position-absolute top-0 start-0 p-2 bg-dark z-3">
          <Link to="/" className="text-white text-decoration-none">
            <img src={Logo} alt="My Logo" style={{ height: '80px' }} />
          </Link>
        </div>

        {/* Navbar */}
        <div className="flex-grow-1 mt-0">
          <div className="bg-black text-white py-1 px-4 d-flex justify-content-between align-items-center small container">
            <div className="d-flex gap-4">
              <Link to="/Tata-cliq-luxury" className="text-white text-decoration-none">Tata CLIQ Luxury</Link>
            </div>

            <div className="d-flex gap-4 align-items-center">
              <Link to="/cliq-cash" className="text-white text-decoration-none">CLiQ Cash</Link>
              <Link to="/gift-card" className="text-white text-decoration-none">Gift Card</Link>
              <Link to="/cliq-care" className="text-white text-decoration-none">CLiQ Care</Link>
              <Link to="/track-orders" className="text-white text-decoration-none">Track Orders</Link>

              <div
                className="position-relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="text-white text-decoration-none me-3" style={{ cursor: 'pointer' }}>
                  {userName ? (
                    <>
                      <PiUserCircleFill className="me-1" style={{ fontSize: '1.2rem' }} />
                       {userName}
                    </>
                  ) : 'Sign In / Sign Up'}
                </span>


                {isHovered && (
                  <div
                    className="dropdown-menu show position-absolute bg-white p-2 rounded shadow"
                    style={{ minWidth: '200px', top: '100%', right: 0, zIndex: 1000 }}
                  >
                    {!userName ? (
                      <Link to="/Register" className="btn text-white rounded-pill w-100 mb-2" style={{ backgroundColor: '#ff0050' }}>
                        Login / Register
                      </Link>
                    ) : (
                      <button onClick={handleLogout} className="btn text-white rounded-pill w-100 mb-2" style={{ backgroundColor: '#dc3545' }}>
                        Logout
                      </button>
                    )}

                    <hr className="my-2" />
                    <Link to="/profile" className="dropdown-item">My Account</Link>
                    <Link to="/my-orders" className="dropdown-item">Order History</Link>
                    <Link to="/wishlist" className="dropdown-item">My Wishlist</Link>
                    <Link to="/alerts" className="dropdown-item">Alerts & Coupons</Link>
                    <Link to="/gift-card" className="dropdown-item">Gift Card</Link>
                    <Link to="/cliq-cash" className="dropdown-item">CLIQ Cash</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
