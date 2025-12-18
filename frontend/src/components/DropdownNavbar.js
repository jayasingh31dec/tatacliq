// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import categories from '../data/categories';
// import brands from '../data/brands';

// import SearchBar from './SearchBar';
// import { SlArrowDown, SlArrowUp } from "react-icons/sl";


// import './DropdownNavbar.css';
// import { useCart } from '../contexts/CartContext';
// import { useWishlist } from '../contexts/WishlistContext';
// import './NavbarLayout.css';

// function DropdownNavbar() {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [openCategory, setOpenCategory] = useState(null);
//   const [openSubcategory, setOpenSubcategory] = useState(null);

//   const { cartItems } = useCart();
//   const { wishlistItems } = useWishlist();

//   const handleMenuToggle = (menu) => {
//     setOpenMenu(menu);
//     setOpenCategory(null);
//     setOpenSubcategory(null);
//   };

//   const handleMenuClose = () => {
//     setOpenMenu(null);
//     setOpenCategory(null);
//     setOpenSubcategory(null);
//   };

//   return (
//     <>
      


//         <nav className="dropdown-navbar">
//           <div className="navbar-left">
//             <div className="dropdown-group">
//               {/* Categories */}
//               <div
//                 className="dropdown-hover-wrapper"
//                 onMouseEnter={() => handleMenuToggle('categories')}
//                 onMouseLeave={handleMenuClose}
//               >




// <span
//   onClick={() => setOpenMenu(openMenu === 'categories' ? '' : 'categories')}
//   style={{
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     color: 'white',
//     fontSize: '16px', 
//     fontWeight: 600, 
//     gap: '6px', 
//     // marginRight:"7px",
//     // marginLeft:"5px",
//     // marginTop:"7px"
//   }}
// >
//   Categories
//   {openMenu === 'categories' ? <SlArrowUp /> : <SlArrowDown />}
// </span>








//                 {openMenu === 'categories' && (
//                   <div className="dropdown-panel">
//                     <ul className="dropdown-list">
//                       {categories.map((cat) => (
//                         <li
//                           key={cat.slug}
//                           className={`dropdown-list-item${openCategory === cat.slug ? ' open' : ''}`}
//                           onMouseEnter={() => setOpenCategory(cat.slug)}
//                           onMouseLeave={() => setOpenCategory(null)}
//                         >
//                           <span className="dropdown-item-label">
//                             <i className="bi bi-folder"></i> {cat.name}
//                           </span>
//                           {openCategory === cat.slug && (
//                             <ul className="dropdown-submenu">
//                               {Object.entries(cat.subcategories).map(([sub, items]) => (
//                                 <li
//                                   key={sub}
//                                   className={`dropdown-list-item${openSubcategory === sub ? ' open' : ''}`}
//                                   onMouseEnter={() => setOpenSubcategory(sub)}
//                                   onMouseLeave={() => setOpenSubcategory(null)}
//                                 >
//                                   <span className="dropdown-item-label">
//                                     {sub}
//                                   </span>
//                                   {openSubcategory === sub && (
//                                     <ul className="dropdown-submenu">
//                                       {items.map((item) => (
//                                         <li key={item}>
//                                           <Link
//                                             to={`/category/${cat.slug}/${sub.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                                             className="dropdown-link"
//                                           >
//                                             {item}
//                                           </Link>
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   )}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* Brands */}
//               <div
//                 className="dropdown-hover-wrapper"
//                 onMouseEnter={() => handleMenuToggle('brands')}
//                 onMouseLeave={handleMenuClose}
//               >








                




//                 <span
//   onClick={() => setOpenMenu(openMenu === 'brands' ? '' : 'brands')}
//   style={{
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     color: 'white',
//     fontSize: '16px', 
//     fontWeight: 600, 
//     gap: '6px' ,
//     // marginRight:'10px',
//     // marginLeft:'15px',
//     // marginTop:"7px"

//   }}
// >
//   brands
//   {openMenu === 'brands' ? <SlArrowUp /> : <SlArrowDown />}
// </span>










//                 {openMenu === 'brands' && (
//                   <div className="dropdown-panel">
//                     <ul className="dropdown-list">
//                       {brands.map((brand) => (
//                         <li key={brand.slug}>
//                           <Link
//                             to={`/brand/${brand.slug}`}
//                             className="dropdown-item-label custom-link"
//                           >
//                             {brand.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* 🔍 SearchBar yaha center/right side me add kar sakte ho */}
//           <div className="navbar-center">
//             <SearchBar />
//           </div>

//           {/* Wishlist and Cart icons */}
//           <div  className="navbar-right ">
//             <Link to="/wishlist" className="icon-link" title="Wishlist">
//               <i className="bi bi-heart">
//                 {wishlistItems.length > 0 && (
//                   <span className="badge wishlist-badge">{wishlistItems.length}</span>
//                 )}
//               </i>
//             </Link>

//             <Link to="/cart" className="icon-link" title="Cart">
//               <i className="bi bi-bag ">
//                 {cartItems.length > 0 && (
//                   <span className="badge">{cartItems.length}</span>
//                 )}
//               </i>
//             </Link>
//           </div>
//         </nav>
      
//     </>
//   );
// }

// export default DropdownNavbar;





































































































import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import brands from '../data/brands';

import SearchBar from './SearchBar';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './DropdownNavbar.css';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import './NavbarLayout.css';

function DropdownNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLevel, setMobileLevel] = useState('root'); // 'root' | cat.slug

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  // detect mobile / desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
        setMobileLevel('root');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = (menu) => {
    setOpenMenu(menu);
    setOpenCategory(null);
    setOpenSubcategory(null);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
    setOpenCategory(null);
    setOpenSubcategory(null);
  };

  // helper: current category for mobile second level
  const currentMobileCategory =
    mobileLevel !== 'root'
      ? categories.find((cat) => cat.slug === mobileLevel)
      : null;

  return (
    <>
      <nav className="dropdown-navbar">
        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="nav-hamburger"
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setMobileLevel('root');
          }}
        >
          ☰
        </button>

        {/* LEFT: categories / brands (DESKTOP ONLY) */}
        {!isMobile && (
          <div className="navbar-left">
            <div className="dropdown-group">
              {/* Categories */}
              <div
                className="dropdown-hover-wrapper"
                onMouseEnter={() => handleMenuToggle('categories')}
                onMouseLeave={handleMenuClose}
              >
                <span
                  onClick={() =>
                    setOpenMenu(
                      openMenu === 'categories' ? '' : 'categories'
                    )
                  }
                  style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 600,
                    gap: '6px',
                  }}
                >
                  Categories
                  {openMenu === 'categories' ? (
                    <SlArrowUp />
                  ) : (
                    <SlArrowDown />
                  )}
                </span>

                {openMenu === 'categories' && (
                  <div className="dropdown-panel">
                    <ul className="dropdown-list">
                      {categories.map((cat) => (
                        <li
                          key={cat.slug}
                          className={`dropdown-list-item${
                            openCategory === cat.slug ? ' open' : ''
                          }`}
                          onMouseEnter={() => setOpenCategory(cat.slug)}
                          onMouseLeave={() => setOpenCategory(null)}
                        >
                          <span className="dropdown-item-label">
                            <i className="bi bi-folder"></i> {cat.name}
                          </span>

                          {openCategory === cat.slug && (
                            <ul className="dropdown-submenu">
                              {Object.entries(cat.subcategories).map(
                                ([sub, items]) => (
                                  <li
                                    key={sub}
                                    className={`dropdown-list-item${
                                      openSubcategory === sub ? ' open' : ''
                                    }`}
                                    onMouseEnter={() =>
                                      setOpenSubcategory(sub)
                                    }
                                    onMouseLeave={() =>
                                      setOpenSubcategory(null)
                                    }
                                  >
                                    <span className="dropdown-item-label">
                                      {sub}
                                    </span>

                                    {openSubcategory === sub && (
                                      <ul className="dropdown-submenu">
                                        {items.map((item) => (
                                          <li key={item}>
                                            <Link
                                              to={`/category/${cat.slug}/${sub
                                                .toLowerCase()}/${item
                                                .toLowerCase()
                                                .replace(/\s+/g, '-')}`}
                                              className="dropdown-link"
                                              onClick={handleMenuClose}
                                            >
                                              {item}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Brands */}
              <div
                className="dropdown-hover-wrapper"
                onMouseEnter={() => handleMenuToggle('brands')}
                onMouseLeave={handleMenuClose}
              >
                <span
                  onClick={() =>
                    setOpenMenu(openMenu === 'brands' ? '' : 'brands')
                  }
                  style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 600,
                    gap: '6px',
                  }}
                >
                  brands
                  {openMenu === 'brands' ? (
                    <SlArrowUp />
                  ) : (
                    <SlArrowDown />
                  )}
                </span>

                {openMenu === 'brands' && (
                  <div className="dropdown-panel">
                    <ul className="dropdown-list">
                      {brands.map((brand) => (
                        <li key={brand.slug}>
                          <Link
                            to={`/brand/${brand.slug}`}
                            className="dropdown-item-label custom-link"
                            onClick={handleMenuClose}
                          >
                            {brand.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CENTER: Search */}
        <div className="navbar-center">
          <SearchBar />
        </div>

        {/* RIGHT: Wishlist + Cart */}
        <div className="navbar-right">
          <Link to="/wishlist" className="icon-link" title="Wishlist">
            <i className="bi bi-heart">
              {wishlistItems.length > 0 && (
                <span className="badge wishlist-badge">
                  {wishlistItems.length}
                </span>
              )}
            </i>
          </Link>

          <Link to="/cart" className="icon-link" title="Cart">
            <i className="bi bi-bag">
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </i>
          </Link>
        </div>
      </nav>

      {/* ============ MOBILE FULL-SCREEN MENU ============ */}
      {isMobile && mobileMenuOpen && (
        <div className="mobile-menu-panel">
          {mobileLevel === 'root' && (
            <>
              <div className="mobile-menu-heading">Categories</div>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  className="mobile-menu-item"
                  onClick={() => setMobileLevel(cat.slug)}
                >
                  {cat.name}
                </button>
              ))}

              <div className="mobile-menu-heading" style={{ marginTop: '1rem' }}>
                Brands
              </div>
              {brands.map((brand) => (
                <Link
                  key={brand.slug}
                  to={`/brand/${brand.slug}`}
                  className="mobile-menu-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {brand.name}
                </Link>
              ))}
            </>
          )}

          {mobileLevel !== 'root' && currentMobileCategory && (
            <>
              <button
                className="mobile-menu-back"
                onClick={() => setMobileLevel('root')}
              >
                ← Back
              </button>

              <div className="mobile-menu-heading">
                {currentMobileCategory.name}
              </div>

              {Object.entries(currentMobileCategory.subcategories).map(
                ([sub, items]) => (
                  <div key={sub}>
                    <div className="mobile-menu-subheading">{sub}</div>
                    {items.map((item) => (
                      <Link
                        key={item}
                        to={`/category/${currentMobileCategory.slug}/${sub
                          .toLowerCase()}/${item
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className="mobile-menu-item"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default DropdownNavbar;
