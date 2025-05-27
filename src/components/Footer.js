import React from 'react';
import { Link } from 'react-router-dom';

// Import logo if used in the footer
import logo from '../assets/images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">Prime Dental Care</h5>
            <p className="mb-0">Providing exceptional dental care with the latest technology and a patient-centered approach.</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
              <li><Link to="/faq" className="text-decoration-none text-light">FAQ</Link></li>
              <li><Link to="/terms-and-conditions" className="text-decoration-none text-light">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Contact Info</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i>123 Dental Street, Mumbai, India 400001</p>
            <p><i className="fas fa-phone-alt me-2"></i>+91 12345 67890</p>
            <p><i className="fas fa-envelope me-2"></i>info@primedentalcare.com</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Prime Dental Care. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
