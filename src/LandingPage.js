// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your styles

function LandingPage() {
  return (
    <div className="landpage-container">
      <div className="landpage-content">
        <h1 className="landpage-title">Welcome to Our Website</h1>
        <p className="landpage-description">
          We are a leading company in providing innovative solutions for your
          needs. Our team of experts is committed to delivering high-quality
          products and services.
        </p>
        <Link to="/about" className="landpage-link">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
