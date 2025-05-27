import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const Booking = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold">Book Your Appointment</h1>
              <p className="lead text-muted">Schedule a visit with our dental specialists</p>
            </div>
            <AppointmentForm />
            <div className="mt-5 text-center">
              <h5 className="text-primary">Emergency Cases</h5>
              <p>For dental emergencies, please call our 24/7 emergency line: <strong>+91 12345 67890</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
