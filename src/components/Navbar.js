import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
    
    // Add event listener for storage changes
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem('currentUser'));
      setCurrentUser(updatedUser);
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for login/logout
    window.addEventListener('user-auth-change', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('user-auth-change', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdminLoggedIn');
    setCurrentUser(null);
    
    // Dispatch a custom event to notify other components
    window.dispatchEvent(new Event('user-auth-change'));
    
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Prime Dental Care" className="hover-3d" style={{height: '60px'}} />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
              <ul className="dropdown-menu shadow-lg">
                <li><Link className="dropdown-item" to="/services/general-dentistry"><i className="fas fa-tooth me-2"></i>General Dentistry</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/services/cosmetic-dentistry"><i className="fas fa-star me-2"></i>Cosmetic Dentistry</Link></li>
                <li><Link className="dropdown-item" to="/services/orthodontics"><i className="fas fa-teeth me-2"></i>Orthodontics</Link></li>
                <li><Link className="dropdown-item" to="/services/pediatric-dentistry"><i className="fas fa-child me-2"></i>Pediatric Dentistry</Link></li>
                <li><Link className="dropdown-item" to="/services/oral-surgery"><i className="fas fa-teeth-open me-2"></i>Oral Surgery</Link></li>
                <li><Link className="dropdown-item" to="/services/root-canal-treatment"><i className="fas fa-head-side-mask me-2"></i>Root Canal Treatment</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/doctors">Doctors</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            {currentUser ? (
              <div className="user-profile position-relative">
                <div 
                  className="d-flex align-items-center text-primary px-3 py-2 rounded-pill border border-primary cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  <i className="fas fa-user-circle me-2 fs-5"></i>
                  <span className="fw-bold">{currentUser.name}</span>
                  <i className="fas fa-chevron-down ms-2 small"></i>
                </div>
                
                {dropdownOpen && (
                  <div 
                    className="position-absolute dropdown-menu show shadow-lg border-0 rounded-3 mt-2"
                    style={{ right: 0, left: 'auto', minWidth: '220px' }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="dropdown-item disabled bg-light text-primary">
                      <small>Logged in as</small>
                      <div className="fw-bold">{currentUser.email}</div>
                    </div>
                    <div className="dropdown-divider"></div>
                    
                    {currentUser.role === 'admin' ? (
                      <>
                        <Link to="/admin/dashboard" className="dropdown-item">
                          <i className="fas fa-tachometer-alt me-2"></i>Admin Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/booking" className="dropdown-item">
                          <i className="fas fa-calendar-plus me-2"></i>Book Appointment
                        </Link>
                        <Link to="/client/dashboard" className="dropdown-item">
                          <i className="fas fa-calendar-check me-2"></i>My Appointments
                        </Link>
                      </>
                    )}
                    
                    <div className="dropdown-divider"></div>
                    <button onClick={handleLogout} className="dropdown-item text-danger">
                      <i className="fas fa-sign-out-alt me-2"></i>Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  <i className="fas fa-sign-in-alt me-2"></i>Login
                </Link>
                <Link to="/register" className="btn btn-outline-success d-none d-sm-block">
                  <i className="fas fa-user-plus me-2"></i>Register
                </Link>
              </>
            )}
            
            <Link to="/booking" className="btn btn-primary px-3 py-2 hover-3d">
              <i className="fas fa-calendar-check me-2"></i>
              <span className="d-none d-md-inline">Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .user-profile {
          cursor: pointer;
        }
        .dropdown-menu {
          z-index: 1021;
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
