import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const brandStyle = {
    fontWeight: '700',
    fontSize: '1.8rem',
    letterSpacing: '1px',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    alignItems: 'center',
  };

  const ctaButtonStyle = {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: '50px',
    padding: '8px 25px',
    color: 'rgb(255, 102, 163)',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    borderRadius: '50px',
    padding: '8px 20px',
    marginRight: '10px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };

  const navLinkStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    margin: '0 0.8rem',
    color: 'white',
  };

  return (
    <>
      <style>
        {`
          .navbar-custom {
            background: rgb(255, 102, 163) !important;
          }
          .navbar-nav .nav-link {
            position: relative;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: white;
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          .navbar-nav .nav-link:hover::after,
          .navbar-nav .nav-link.active::after {
            width: 70%;
          }
          .navbar-nav .nav-link:hover {
            color: #f5f5f5 !important;
          }
          .navbar-nav .nav-link.active {
            color: #fff !important;
          }
          .btn-signin:hover {
            background-color: white !important;
            color: rgb(255, 102, 163) !important;
            transform: translateY(-2px);
          }
          .btn-booknow:hover {
            background-color: #ffe6f0 !important;
            color: rgb(255, 102, 163) !important;
            transform: translateY(-2px);
          }
          .navbar-brand:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
          }
          @media (max-width: 991.98px) {
            .nav-buttons {
              margin-top: 1rem;
              display: flex;
              gap: 0.5rem;
              justify-content: center;
            }
            .btn-signin, .btn-booknow {
              margin: 0.25rem;
            }
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom shadow-sm sticky-top py-3">
        <div className="container">
          <Link className="navbar-brand" to="/" style={brandStyle}>
           <span style={{ color: 'white', fontWeight: 'bold' }}>Royal</span>
           <span style={{ color: '#f3e9caff', marginLeft: '6px', fontWeight: 'bold' }}>Creation</span>

</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" style={navLinkStyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" style={navLinkStyle}>About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services" style={navLinkStyle}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/weddings' ? 'active' : ''}`} to="/weddings" style={navLinkStyle}>Weddings</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`} to="/reviews" style={navLinkStyle}>Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog" style={navLinkStyle}>Blog</Link>
              </li>
            </ul>
            <div className="nav-buttons d-flex align-items-center">
              <Link to="/signin" className="btn btn-signin" style={secondaryButtonStyle}>
                Sign In
              </Link>
              <Link to="/book-event" className="btn btn-booknow" style={ctaButtonStyle}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
