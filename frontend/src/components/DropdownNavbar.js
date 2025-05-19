import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import brands from '../data/brands';
import TopNavbar from './TopNavbar';
import SearchBar from './SearchBar'; // 👈 Import search bar

import './DropdownNavbar.css';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import './NavbarLayout.css';

function DropdownNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

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

  return (
    <>
      <div className="navbar-container">
        <TopNavbar />

        <nav className="dropdown-navbar">
          <div className="navbar-left">
            <div className="dropdown-group">
              {/* Categories */}
              <div
                className="dropdown-hover-wrapper"
                onMouseEnter={() => handleMenuToggle('categories')}
                onMouseLeave={handleMenuClose}
              >
                <button
                  className={`dropdown-btn ${openMenu === 'categories' ? 'active' : ''}`}
                >
                  <i className="bi bi-list"></i> Categories
                  <span className="dropdown-arrow">{openMenu === 'categories' ? '▲' : '▼'}</span>
                </button>

                {openMenu === 'categories' && (
                  <div className="dropdown-panel">
                    <ul className="dropdown-list">
                      {categories.map((cat) => (
                        <li
                          key={cat.slug}
                          className={`dropdown-list-item${openCategory === cat.slug ? ' open' : ''}`}
                          onMouseEnter={() => setOpenCategory(cat.slug)}
                          onMouseLeave={() => setOpenCategory(null)}
                        >
                          <span className="dropdown-item-label">
                            <i className="bi bi-folder"></i> {cat.name}
                          </span>
                          {openCategory === cat.slug && (
                            <ul className="dropdown-submenu">
                              {Object.entries(cat.subcategories).map(([sub, items]) => (
                                <li
                                  key={sub}
                                  className={`dropdown-list-item${openSubcategory === sub ? ' open' : ''}`}
                                  onMouseEnter={() => setOpenSubcategory(sub)}
                                  onMouseLeave={() => setOpenSubcategory(null)}
                                >
                                  <span className="dropdown-item-label">
                                    {sub}
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
              </div>

              {/* Brands */}
              <div
                className="dropdown-hover-wrapper"
                onMouseEnter={() => handleMenuToggle('brands')}
                onMouseLeave={handleMenuClose}
              >
                <button
                  className={`dropdown-btn ${openMenu === 'brands' ? 'active' : ''}`}
                >
                  <i className="bi bi-stars"></i> Brands
                  <span className="dropdown-arrow">{openMenu === 'brands' ? '▲' : '▼'}</span>
                </button>

                {openMenu === 'brands' && (
                  <div className="dropdown-panel">
                    <ul className="dropdown-list">
                      {brands.map((brand) => (
                        <li key={brand.slug}>
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
            </div>
          </div>

          {/* 🔍 SearchBar yaha center/right side me add kar sakte ho */}
          <div className="navbar-center">
            <SearchBar />
          </div>

          {/* Wishlist and Cart icons */}
          <div className="navbar-right me-2">
            <Link to="/wishlist" className="icon-link" title="Wishlist">
              <i className="bi bi-heart">
                {wishlistItems.length > 0 && (
                  <span className="badge wishlist-badge">{wishlistItems.length}</span>
                )}
              </i>
            </Link>

            <Link to="/cart" className="icon-link" title="Cart">
              <i className="bi bi-bag me-2">
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </i>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default DropdownNavbar;
