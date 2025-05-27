import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [confirmSuccess, setConfirmSuccess] = useState(null);
  const navigate = useNavigate();

  // Load appointments on component mount and when they change
  const loadAppointments = () => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  };

  useEffect(() => {
    // Check if admin is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isAdmin = currentUser && currentUser.role === 'admin';
    if (!isAdmin) {
      navigate('/login');
      return;
    }

    // Load appointments from local storage
    loadAppointments();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/login');
  };

  // Improved confirmation functionality with better error handling
  const confirmAppointment = (id) => {
    try {
      // Convert id to number if it's stored as string
      const appointmentId = Number(id);
      
      // Get latest appointments from localStorage
      const latestAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      
      // Update the appointment status
      const updatedAppointments = latestAppointments.map(appt => {
        // Convert appt.id to number for comparison if needed
        const currentId = Number(appt.id);
        return currentId === appointmentId ? { ...appt, status: 'confirmed' } : appt;
      });
      
      // Save to localStorage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      
      // Update state
      setAppointments(updatedAppointments);
      
      // Show success message
      setConfirmSuccess(`Appointment confirmed successfully!`);
      
      // Clear success message after 3 seconds
      setTimeout(() => setConfirmSuccess(null), 3000);
      
      console.log('Appointment confirmed:', appointmentId);
      console.log('Updated appointments:', updatedAppointments);
    } catch (error) {
      console.error("Error confirming appointment:", error);
      alert("There was an error confirming the appointment. Please try again.");
    }
  };

  return (
    <section className="py-5" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-5 fw-bold">Admin Dashboard - Appointments</h1>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>

        {confirmSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="fas fa-check-circle me-2"></i>
            {confirmSuccess}
            <button type="button" className="btn-close" onClick={() => setConfirmSuccess(null)}></button>
          </div>
        )}

        {appointments.length > 0 ? (
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={appt.id} className={appt.status === 'unconfirmed' ? 'table-warning bg-opacity-25' : ''}>
                    <td>{index + 1}</td>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.phone}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>
                      {appt.service === 'general' && 'General Dentistry'}
                      {appt.service === 'cosmetic' && 'Cosmetic Dentistry'}
                      {appt.service === 'orthodontics' && 'Orthodontics'}
                      {appt.service === 'pediatric' && 'Pediatric Dentistry'}
                      {appt.service === 'surgery' && 'Oral Surgery'}
                      {appt.service === 'root-canal' && 'Root Canal Treatment'}
                    </td>
                    <td>
                      {appt.status === 'confirmed' ? (
                        <span className="badge bg-success">Confirmed</span>
                      ) : (
                        <span className="badge bg-warning text-dark">Unconfirmed</span>
                      )}
                    </td>
                    <td>
                      {appt.status === 'unconfirmed' ? (
                        <button 
                          className="btn btn-sm btn-success"
                          onClick={() => confirmAppointment(appt.id)}
                        >
                          <i className="fas fa-check me-1"></i> Confirm
                        </button>
                      ) : (
                        <button className="btn btn-sm btn-secondary" disabled>
                          <i className="fas fa-check-double me-1"></i> Confirmed
                        </button>
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
            No appointments booked yet.
          </div>
        )}

        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h4 className="card-title"><i className="fas fa-info-circle me-2 text-primary"></i>Admin Instructions</h4>
            <ol className="mb-0">
              <li className="mb-2">Review all unconfirmed appointments (highlighted in yellow)</li>
              <li className="mb-2">Click the <span className="badge bg-success"><i className="fas fa-check me-1"></i>Confirm</span> button to approve appointments</li>
              <li className="mb-2">Confirmed appointments will be visible to clients in their dashboard</li>
              <li className="mb-2"><strong>Note:</strong> Once an appointment is confirmed, it cannot be reverted back to unconfirmed</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;