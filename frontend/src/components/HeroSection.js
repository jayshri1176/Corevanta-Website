import React from "react";
import "./HeroSection.css";
import { FaRocket } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to <span className="brand">Corevanta</span></h1>
          <p>Your Gateway to Innovative Digital Solutions</p>
          <a href="#contact" className="hero-button">
            <FaRocket className="rocket-icon" /> Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
