import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const [formMessage, setFormMessage] = useState('');
  const [appointments, setAppointments] = useState([]);

  // Load appointments and user data on component mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }

    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
      
      // If user is logged in, pre-fill the form with their information
      if (user.role === 'client') {
        // Get additional user info if needed
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userDetails = users.find(u => u.id === user.id);
        
        setFormData(prevState => ({
          ...prevState,
          name: user.name,
          email: user.email,
          phone: userDetails?.phone || ''
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    const namePattern = /^[a-zA-Z\s]{3,50}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    
    if (!namePattern.test(formData.name)) {
      setFormMessage('<div class="alert alert-danger">Please enter a valid name (3-50 characters).</div>');
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setFormMessage('<div class="alert alert-danger">Please enter a valid email address.</div>');
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      setFormMessage('<div class="alert alert-danger">Please enter a valid 10-digit phone number.</div>');
      return;
    }

    if (!formData.date) {
      setFormMessage('<div class="alert alert-danger">Please select a valid date.</div>');
      return;
    }

    if (!formData.time) {
      setFormMessage('<div class="alert alert-danger">Please select a valid time.</div>');
      return;
    }

    if (!formData.service) {
      setFormMessage('<div class="alert alert-danger">Please select a service.</div>');
      return;
    }

    // Save appointment to local storage with user ID if logged in
    const newAppointment = { 
      ...formData, 
      id: Date.now(),
      userId: currentUser?.id || null,
      status: 'unconfirmed' // Changed from 'confirmed' to 'unconfirmed'
    };
    
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    // Success message and form reset
    setFormMessage('<div class="alert alert-success">Your appointment request has been submitted successfully! It will be reviewed by our staff for confirmation.</div>');
    
    // Only reset form if not a logged-in user
    if (!currentUser) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: ''
      });
    } else {
      // Just reset date, time and service
      setFormData(prevState => ({
        ...prevState,
        date: '',
        time: '',
        service: ''
      }));
      
      // Redirect to dashboard after a short delay if user is logged in
      setTimeout(() => {
        navigate('/client/dashboard');
      }, 2000);
    }
    
    // Clear message after a few seconds
    setTimeout(() => setFormMessage(''), 5000);
  };

  return (
    <div className="card border-0 shadow-lg hover-3d">
      <div className="card-body p-5">
        <h3 className="text-center mb-4">Book Your Appointment</h3>
        
        {!currentUser && (
          <div className="alert alert-info mb-4">
            Already have an account? <a href="/login" className="alert-link">Login</a> to track your appointments.
          </div>
        )}
        
        <form id="appointmentForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={currentUser !== null}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={currentUser !== null}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={currentUser !== null}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Preferred Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Preferred Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Service Required</label>
            <select
              className="form-select"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="general">General Dentistry</option>
              <option value="cosmetic">Cosmetic Dentistry</option>
              <option value="orthodontics">Orthodontics</option>
              <option value="pediatric">Pediatric Dentistry</option>
              <option value="surgery">Oral Surgery</option>
              <option value="root-canal">Root Canal Treatment</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <div id="formMessage" className="mt-3" dangerouslySetInnerHTML={{__html: formMessage}}></div>
      </div>
    </div>
  );
};

export default AppointmentForm;
