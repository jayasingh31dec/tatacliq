import React from 'react';
import TopNavbar from './TopNavbar';
import DropdownNavbar from './DropdownNavbar';
import './NavbarLayout.css'; // For width/layout

function NavbarLayout() {
  return (
    <div className="navbar-container"> {/* Shared width */}
      <TopNavbar />
      <DropdownNavbar />
    </div>
  );
}

export default NavbarLayout;
