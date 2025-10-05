import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css'; // Reusing the same CSS file

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!agreeTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert('Registration successful! Please sign in.');
        navigate('/signin');
      } else {
        const errorData = await response.json();
        alert(errorData.msg || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration. Please try again later.');
    }
  };

  const pinkTheme = {
    primary: 'rgb(255, 102, 163)',
    primaryHover: '#e60073',
    primaryLight: 'rgba(255, 102, 163, 0.1)',
    primaryLighter: 'rgba(255, 102, 163, 0.05)'
  };

  return (
    <div className="signin-container">
      {/* Background Decoration */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="signin-wrapper">
        {/* Left Side - Brand Section */}
        <div className="brand-section">
          <div className="brand-content">
            <div className="brand-logo">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="60" 
                height="60" 
                fill="currentColor" 
                className="bi bi-crown-fill" 
                viewBox="0 0 16 16"
                style={{ color: 'white' }}
              >
                <path d="M8 0a1.5 1.5 0 0 0-1.5 1.5h3A1.5 1.5 0 0 0 8 0M5.5 2A1.5 1.5 0 0 0 4 3.5h8A1.5 1.5 0 0 0 10.5 2zM2 5.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z"/>
              </svg>
            </div>
            <h1>Royal Creation</h1>
            <p className="brand-tagline">
              Join our family and start planning your dream events with us. Create unforgettable memories.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Exclusive event planning</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Priority booking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Special member discounts</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Personalized recommendations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - SignUp Form */}
        <div className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>Create Account</h2>
              <p>Join Royal Creation and start your event planning journey</p>
            </div>

            {/* Social SignUp Buttons */}
            <div className="social-login">
              <button className="social-btn google-btn">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>
              
              <button className="social-btn facebook-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign up with Facebook
              </button>
            </div>

            <div className="divider">
              <span>or sign up with email</span>
            </div>

            {/* SignUp Form */}
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  className="form-input"
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="form-input"
                  minLength="6"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                  I agree to the{' '}
                  <Link to="/terms" className="terms-link">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="terms-link">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <button type="submit" className="signin-btn">
                Create Account
              </button>
            </form>

            <div className="signup-link">
              <p>
                Already have an account?{' '}
                <Link to="/signin" className="signup-text">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;