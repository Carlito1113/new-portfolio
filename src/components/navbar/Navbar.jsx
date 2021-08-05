import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="navbar__logo">{`{C.A}`}</h2>
        {/* <div className="navbar__item">About</div>
        <div className="navbar__item">Portfolio</div>
        <div className="navbar__item">Contact</div> */}
      </nav>
    </div>
  );
}
