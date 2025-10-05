import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#fdf2f7' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold" style={{ color: 'rgb(255, 102, 163)' }}>
              Join Royal Creation
            </h2>
            <p className="lead text-muted mt-3 mb-4">
              Create an account to save your favorite ideas, manage your bookings, and get exclusive tips and offers delivered to your inbox.
            </p>
            <Link
              to="/signup"
              className="btn btn-lg text-white"
              style={{ background: 'rgb(255, 102, 163)', borderRadius: '50px', padding: '12px 40px' }}
            >
              Create Your Free Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;