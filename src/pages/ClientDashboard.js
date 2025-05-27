import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'client') {
      navigate('/login');
      return;
    }
    
    setUser(currentUser);
    
    // Load all appointments
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    // Filter appointments for this user
    const userBookings = storedAppointments.filter(appt => 
      appt.userId === currentUser.id || 
      appt.email === currentUser.email // For backward compatibility
    );
    
    setUserAppointments(userBookings);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <section className="py-5" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-5 fw-bold">My Appointments</h1>
          <div>
            <button 
              className="btn btn-primary me-2" 
              onClick={() => navigate('/booking')}
            >
              <i className="fas fa-plus-circle me-2"></i>New Appointment
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt me-2"></i>Logout
            </button>
          </div>
        </div>

        {user && (
          <div className="card mb-4 bg-light">
            <div className="card-body">
              <h4>Welcome, {user.name}!</h4>
              <p className="mb-0">Email: {user.email}</p>
            </div>
          </div>
        )}

        {userAppointments.length > 0 ? (
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userAppointments.map((appt, index) => (
                  <tr key={appt.id}>
                    <td>{index + 1}</td>
                    <td>{appt.service}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>
                      {appt.status === 'confirmed' ? (
                        <span className="badge bg-success">Confirmed</span>
                      ) : (
                        <span className="badge bg-warning text-dark">Pending Confirmation</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert alert-info text-center">
            <i className="fas fa-info-circle me-2"></i>
            You don't have any appointments booked yet. 
            <a href="/booking" className="ms-2 alert-link">Book an appointment now!</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientDashboard;