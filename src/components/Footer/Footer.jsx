import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/*Section 1: Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">Nik-Shop</h2>
          <p>Quality you trust, Trends you love. Stay updated with Nik-Shop.</p>
          
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Section 3: Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Sports</li>
            <li>Beauty</li>
          </ul> 
        </div>

        {/* Section 4: Contact & Newsletter */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 support@nikshop.com</p>
          <p>📍 Ujjain, India</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter Email....." />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Nik-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;