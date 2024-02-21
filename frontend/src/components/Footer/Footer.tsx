// components/Footer.js
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company-info">
        <img src="/assets/logo.png" alt=" Logo" className="company-logo" />
        <h2>JobVantage</h2>
        <p></p>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Find Jobs</a>
          </li>
          <li>
            <a href="#">Find Projects</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: safals2059@gmail.com</p>
        <p>Phone: +977 9865477059</p>
      </div>
    </footer>
  );
};

export default Footer;
