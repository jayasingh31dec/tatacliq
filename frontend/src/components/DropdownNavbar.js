import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import brands from '../data/brands'; // your brands data
import TopNavbar from './TopNavbar';
import './DropdownNavbar.css';
import { useCart } from '../contexts/CartContext'; // Import CartContext
import { useWishlist } from '../contexts/WishlistContext';// Import WishlistContext




function DropdownNavbar() {
  const [openMenu, setOpenMenu] = useState(null); // 'categories' or 'brands'
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);





  // Get cart and wishlist item counts
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();






  const handleMenuToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenCategory(null);
    setOpenSubcategory(null);
  };

  return (
    <>
      <TopNavbar />

      <nav className="dropdown-navbar">
        <div className="navbar-left">
          <div className="dropdown-group">
            <button
              className={`dropdown-btn ${openMenu === 'categories' ? 'active' : ''}`}
              onClick={() => handleMenuToggle('categories')}
              aria-expanded={openMenu === 'categories'}
              aria-controls="categories-dropdown"
            >
              <i className="bi bi-list"></i> Categories
              <span className="dropdown-arrow">{openMenu === 'categories' ? '▲' : '▼'}</span>
            </button>
            <button
              className={`dropdown-btn ${openMenu === 'brands' ? 'active' : ''}`}
              onClick={() => handleMenuToggle('brands')}
              aria-expanded={openMenu === 'brands'}
              aria-controls="brands-dropdown"
            >
              <i className="bi bi-stars"></i> Brands
              <span className="dropdown-arrow">{openMenu === 'brands' ? '▲' : '▼'}</span>
            </button>
          </div>

          {/* Categories Dropdown */}
          {openMenu === 'categories' && (
            <div className="dropdown-panel" id="categories-dropdown" onMouseLeave={() => setOpenCategory(null)}>
              <ul className="dropdown-list">
                {categories.map((cat) => (
                  <li
                    key={cat.slug}
                    className={`dropdown-list-item${openCategory === cat.slug ? ' open' : ''}`}
                    onMouseEnter={() => setOpenCategory(cat.slug)}
                  >
                    <span className="dropdown-item-label">
                      <i className="bi bi-folder"></i> {cat.name}
                      <span className="dropdown-arrow"></span>
                    </span>
                    {openCategory === cat.slug && (
                      <ul className="dropdown-submenu">
                        {Object.entries(cat.subcategories).map(([sub, items]) => (
                          <li
                            key={sub}
                            className={`dropdown-list-item${openSubcategory === sub ? ' open' : ''}`}
                            onMouseEnter={() => setOpenSubcategory(sub)}
                          >
                            <span className="dropdown-item-label">
                              {sub.charAt(0).toUpperCase() + sub.slice(1)}
                              <span className="dropdown-arrow"></span>
                            </span>
                            {openSubcategory === sub && (
                              <ul className="dropdown-submenu">
                                {items.map((item) => (
                                  <li key={item}>
                                    <Link

                                      to={`/category/${cat.slug}/${sub.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="dropdown-link"
                                    >
                                      {item}
                                    </Link>

                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Brands Dropdown */}
          {openMenu === 'brands' && (
            <div className="dropdown-panel" id="brands-dropdown">
              <ul className="dropdown-list">
                {brands.map((brand) => (
                  <li key={brand.slug} className="dropdown-list-item">
                    <Link
                      to={`/brand/${brand.slug}`}
                      className="dropdown-item-label fw-bold"
                    >
                      <i className="bi bi-award"></i> {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Side: Icons */}
        <div className="navbar-right">
          <Link to="/wishlist" className="icon-link" title="Wishlist">



            <i className="bi bi-heart">
              {wishlistItems.length > 0 && (
                <span className="badge wishlist-badge">{wishlistItems.length}</span>
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









          <Link to="/profile" className="icon-link" title="Profile">
            <i className="bi bi-person-circle"></i>
          </Link>




          {/* // my order icon  */}




          <Link to="/my-orders" className="icon-link" title="My Orders">
            <i className="bi bi-box-seam"></i>
          </Link>




        </div>
      </nav>
    </>
  );
}

export default DropdownNavbar;
