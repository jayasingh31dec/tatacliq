// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../logo/download.2.png';
// import { PiUserCircleFill } from "react-icons/pi";
// import './TopNavbar.css';




// function TopNavbar() {
//   const [open, setOpen] = useState(false);
//   const [userName, setUserName] = useState(null);
//   // const [isHovered, setIsHovered] = useState(false); // Add this missing state
//   const navigate = useNavigate();

//   useEffect(() => {
//     // On mount, check user
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUserName(parsedUser.name);
//     }

//     // Listen to login event
//     const handleUserLogin = () => {
//       const newUser = localStorage.getItem('user');
//       if (newUser) {
//         const parsed = JSON.parse(newUser);
//         setUserName(parsed.name);
//       }
//     };

//     window.addEventListener("userLoggedIn", handleUserLogin);

//     return () => {
//       window.removeEventListener("userLoggedIn", handleUserLogin);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('token'); 
//     setUserName(null);
//     setOpen(false); // Close dropdown
//     navigate('/');
//   };

//   return (
//     <div className="top-navbar">

//   <div className="bg-dark text-white">
//     <div className="top-bar">
//       {/* Left: Logo + Luxury link */}

//         <div className="top-left">
//         <div className="logo-header">
//           <Link to="/" className="text-white text-decoration-none">
//             <img src={Logo} alt="My Logo" className="logo-img" />
//           </Link>
//         </div>

//         <Link to="/Tata-cliq-luxury" className="text-white text-decoration-none">
//           Tata CLIQ Luxury
//         </Link>
//       </div>







//       {/* Right: links + user */}
//       {/* Center: CLiQ Cash, Gift Card, CLiQ Care, Track Orders */}
//        <div className="top-center">
//         <Link to="/cliq-cash" className="text-white text-decoration-none">CLiQ Cash</Link>
//         <Link to="/gift-card" className="text-white text-decoration-none">Gift Card</Link>
//         <Link to="/cliq-care" className="text-white text-decoration-none">CLiQ Care</Link>
//         <Link to="/track-orders" className="text-white text-decoration-none">Track Orders</Link>

//         <div
//           className="top-right position-relative"


//         >
//           <span className="text-white text-decoration-none me-3"  style={{ cursor: 'pointer' }}onClick={() => setOpen(prev => !prev)}>
//             {userName ? (
//               <>
//                 <PiUserCircleFill className="me-1" style={{ fontSize: '1.2rem' }} />
//                 {userName}
//               </>
//             ) : 'Sign In / Sign Up'}
//           </span>

//           {open && (
//             <div
//               className="dropdown-menu show position-absolute bg-white p-2 rounded shadow"
//               style={{ minWidth: '200px', top: '100%', right: 0, zIndex: 1000 }}
//             >
//               {!userName ? (
//                 <Link
//                   to="/Register"
//                   className="btn text-white rounded-pill w-100 mb-2"
//                   style={{ backgroundColor: '#ff0050' }}
//                   onClick={() => setOpen(false)} // Close dropdown
//                 >
//                   Login / Register
//                 </Link>
//               ) : (
//                 <button
//                   onClick={handleLogout}
//                   className="btn text-white rounded-pill w-100 mb-2"
//                   style={{ backgroundColor: '#dc3545' }}
//                 >
//                   Logout
//                 </button>
//               )}

//               <hr className="my-2" />
//               <Link to="/profile" className="dropdown-item">My Account</Link>
//               <Link to="/my-orders" className="dropdown-item">Order History</Link>
//               <Link to="/wishlist" className="dropdown-item">My Wishlist</Link>
//               <Link to="/alerts" className="dropdown-item">Alerts & Coupons</Link>
//               <Link to="/gift-card" className="dropdown-item">Gift Card</Link>
//               <Link to="/cliq-cash" className="dropdown-item">CLIQ Cash</Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
// );







// }

// export default TopNavbar;








































































import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../logo/download.2.png';
import { PiUserCircleFill } from "react-icons/pi";
import './TopNavbar.css';

function TopNavbar() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }

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
    setOpen(false);
    navigate('/');
  };

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  };

  return (
    <div className="top-navbar">

      <div className="top-bar">
        {/* Left: Logo + Luxury link */}
        <div className="top-left">
          <div className="logo-header">
            <Link to="/" className="text-white text-decoration-none">
              <img src={Logo} alt="My Logo" className="logo-img" />
            </Link>
          </div>

          <Link to="/Tata-cliq-luxury" className="text-white text-decoration-none">
            Tata CLIQ Luxury
          </Link>
        </div>







        {/* Center: links */}
        <div className="top-center">

          <Link to="/cliq-cash" className="text-white text-decoration-none">CLiQ Cash</Link>
          <Link to="/gift-card" className="text-white text-decoration-none">Gift Card</Link>
          <Link to="/cliq-care" className="text-white text-decoration-none">CLiQ Care</Link>
          <Link to="/track-orders" className="text-white text-decoration-none">Track Orders</Link>
        </div>
        {/* Right: User dropdown */}
        <div
          className="top-right position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="text-white text-decoration-none me-3"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen(prev => !prev)}   // mobile / click
          >
            {userName ? (
              <>
                <PiUserCircleFill className="me-1" style={{ fontSize: '1.2rem' }} />
                {userName}
              </>
            ) : 'Sign In / Sign Up'}
          </span>

          {open && (
            <div
              className="dropdown-menu show position-absolute bg-white p-2 rounded shadow"
              style={{ minWidth: '200px', top: '100%', right: 0, zIndex: 1000 }}
            >
              {!userName ? (
                <Link
                  to="/Register"
                  className="btn text-white rounded-pill w-100 mb-2"
                  style={{ backgroundColor: '#ff0050' }}
                  onClick={() => setOpen(false)}
                >
                  Login / Register
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="btn text-white rounded-pill w-100 mb-2"
                  style={{ backgroundColor: '#dc3545' }}
                >
                  Logout
                </button>
              )}

              <hr className="my-2" />
              <Link
                to="/profile"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                My Account
              </Link>
              <Link
                to="/my-orders"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                Order History
              </Link>
              <Link
                to="/wishlist"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                My Wishlist
              </Link>
              <Link
                to="/alerts"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                Alerts & Coupons
              </Link>
              <Link
                to="/gift-card"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                Gift Card
              </Link>
              <Link
                to="/cliq-cash"
                className="dropdown-item"
                style={{ color: '#000' }}
                onClick={() => setOpen(false)}
              >
                CLIQ Cash
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>


  );
}

export default TopNavbar;
