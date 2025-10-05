import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const themeColor = 'rgb(255, 102, 163)';
  const linkStyle = { textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)' };
  const linkHoverStyle = { color: 'white' };

  // Helper for hover effect
  const handleMouseOver = (e) => e.target.style.color = linkHoverStyle.color;
  const handleMouseOut = (e) => e.target.style.color = linkStyle.color;

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Column 1: Brand and About */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-crown-fill me-2" viewBox="0 0 16 16" style={{ color: themeColor }}>
                <path d="M8 0a1.5 1.5 0 0 0-1.5 1.5h3A1.5 1.5 0 0 0 8 0M5.5 2A1.5 1.5 0 0 0 4 3.5h8A1.5 1.5 0 0 0 10.5 2zM2 5.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z"/>
              </svg>
              <h5 className="text-uppercase fw-bold m-0" style={{ color: themeColor, fontSize: '1.5rem' }}>
                Royal Creation
              </h5>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Crafting unforgettable moments and turning your dream events into reality with passion and precision.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <p><Link to="/" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</Link></p>
            <p><Link to="/about" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</Link></p>
            <p><Link to="/services" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Services</Link></p>
            <p><Link to="/blog" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Blog</Link></p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p style={linkStyle}><i className="bi bi-geo-alt-fill me-3"></i>Kalyan, Maharashtra, India</p>
            <p style={linkStyle}><i className="bi bi-envelope-fill me-3"></i>nikhil.lone@gmail.com</p>
            <p style={linkStyle}><i className="bi bi-telephone-fill me-3"></i>+91 9665874795</p>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Stay up to date with our latest events and offers.
            </p>
            <div>
              <a href="https://www.facebook.com/share/1NinVhtxcK/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/royal_creation_event?igsh=MWdqaWdicmdvcXM0ag==" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright Section */}
        <div className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © {new Date().getFullYear()} Copyright:
                <a className="text-white ms-2" style={{ textDecoration: 'none', fontWeight: 'bold' }} href="/">RoyalCreation.com</a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link to="/privacy-policy" className="me-4" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Privacy Policy</Link>
                <Link to="/terms-of-service" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;