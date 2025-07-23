import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Corevanta</div>
      <ul className="nav-links">
        <li><a href="#home" aria-label="Home">Home</a></li>
        <li><a href="#about" aria-label="About">About</a></li>
        <li><a href="#contact" aria-label="Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
