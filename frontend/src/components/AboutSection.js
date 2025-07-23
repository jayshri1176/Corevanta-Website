import React from "react";
import "./AboutSection.css";
import { FaLightbulb, FaLaptopCode, FaUsers } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>Corevanta</strong>, we empower businesses with cutting-edge digital solutions.
            Our mission is to innovate, create, and deliver seamless technology experiences.
          </p>

          <div className="about-icons">
            <div className="icon-box">
              <FaLightbulb className="icon" />
              <h4>Innovation</h4>
              <p>Creative strategies tailored to modern challenges.</p>
            </div>
            <div className="icon-box">
              <FaLaptopCode className="icon" />
              <h4>Technology</h4>
              <p>We engineer scalable, secure digital platforms.</p>
            </div>
            <div className="icon-box">
              <FaUsers className="icon" />
              <h4>Collaboration</h4>
              <p>Client-focused, transparent, and agile teamwork.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
            alt="About us"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
