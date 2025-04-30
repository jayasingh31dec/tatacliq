import React from 'react';
import TopNavbar from './TopNavbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DropdownNavbar() {
  return (
    <>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Bottom Navbar with Dropdowns, Search, and Icons */}
      <div className="d-flex align-items-center justify-content-between px-4 py-3 bg-light shadow-sm">

        {/* Left Side: Dropdowns */}
        <div className="d-flex gap-3 align-items-center">
          {/* Categories Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-categories" className="d-flex align-items-center justify-content-between" style={{ width: '200px' }}>
              <i className="bi bi-list me-2"></i> Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/categories">All Categories</Dropdown.Item>
              <Dropdown.Item>Sub-category 1</Dropdown.Item>
              <Dropdown.Item>Sub-category 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Brands Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-brands" className="d-flex align-items-center justify-content-between" style={{ width: '200px' }}>
              <i className="bi bi-tags me-2"></i> Brands
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/brands">All Brands</Dropdown.Item>
              <Dropdown.Item>Brand 1</Dropdown.Item>
              <Dropdown.Item>Brand 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Center: Search Bar */}
        <form className="d-flex flex-grow-1 mx-4">
          <input
            className="form-control"
            type="search"
            placeholder="Search for products, brands and more"
            aria-label="Search"
            style={{ border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </form>

        {/* Right Side: Icons */}
        <div className="d-flex align-items-center gap-4">
          <Link to="/wishlist" className="text-dark fs-5">
            <i className="bi bi-heart"></i>
          </Link>
          <Link to="/cart" className="text-dark fs-5">
            <i className="bi bi-bag"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DropdownNavbar;
