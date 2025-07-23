import React, { useState } from "react";
import "./ContactForm.css";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! 💌");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>📩 Let's Connect</h2>
        <p>We’d love to hear from you — drop a message anytime!</p>
        <form onSubmit={handleSubmit} className="glass-form">
          <div className="input-box">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <FaCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className="send-button">Send Message 💬</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

