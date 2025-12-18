import React from 'react';
import TopNavbar from './TopNavbar';
import DropdownNavbar from './DropdownNavbar';
import './NavbarLayout.css';

function NavbarLayout({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileLevel,
  setMobileLevel,
}) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <TopNavbar
          onHomeClick={() => {
            setMobileMenuOpen(false);
            setMobileLevel('root');
          }}
        />
        <DropdownNavbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileLevel={mobileLevel}
          setMobileLevel={setMobileLevel}
        />
      </div>
    </div>
  );
}

export default NavbarLayout;
