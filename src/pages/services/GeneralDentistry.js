import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../assets/images/service-1.jpeg';

const GeneralDentistry = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">General Dentistry</h1>
            <img src={service1} alt="General Dentistry" className="img-fluid rounded mb-4" />
            
            <h4 className="text-primary mt-5">Comprehensive General Dental Care</h4>
            <p className="lead">
              Our general dentistry services focus on preventive care and routine examinations to maintain optimal oral health.
            </p>
            
            <p>
              At Prime Dental Care, our general dentistry services provide the foundation for maintaining your oral health. 
              We believe that prevention is better than cure, which is why we focus on regular check-ups and professional cleanings to prevent issues before they arise.
            </p>

            <h4 className="text-primary mt-4">Our General Dentistry Services Include:</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Comprehensive Dental Examinations</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Professional Teeth Cleaning</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Dental X-rays and Diagnostics</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Tooth-Colored Fillings</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Gum Disease Treatment</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Oral Cancer Screenings</li>
            </ul>
            
            <h4 className="text-primary mt-4">Why Regular Dental Check-ups Matter</h4>
            <p>
              Regular dental check-ups are essential for detecting issues early when they're easier and less expensive to treat. 
              Our dentists recommend visiting the clinic every six months for a routine examination and cleaning.
            </p>
            
            <div className="mt-5">
              <Link to="/booking" className="btn btn-primary me-3">
                <i className="fas fa-calendar-check me-2"></i>Book Appointment
              </Link>
              <Link to="/contact" className="btn btn-outline-primary">
                <i className="fas fa-question-circle me-2"></i>Ask a Question
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title">Our Services</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item active">General Dentistry</li>
                  <li className="list-group-item"><Link to="/services/cosmetic-dentistry" className="text-decoration-none">Cosmetic Dentistry</Link></li>
                  <li className="list-group-item"><Link to="/services/orthodontics" className="text-decoration-none">Orthodontics</Link></li>
                  <li className="list-group-item"><Link to="/services/pediatric-dentistry" className="text-decoration-none">Pediatric Dentistry</Link></li>
                  <li className="list-group-item"><Link to="/services/oral-surgery" className="text-decoration-none">Oral Surgery</Link></li>
                  <li className="list-group-item"><Link to="/services/root-canal-treatment" className="text-decoration-none">Root Canal Treatment</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="card border-0 shadow-sm">
              <div className="card-body bg-light rounded">
                <h4 className="card-title">Working Hours</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="far fa-clock text-primary me-2"></i>Monday - Friday: 9:00 AM - 7:00 PM</li>
                  <li className="mb-2"><i className="far fa-clock text-primary me-2"></i>Saturday: 9:00 AM - 5:00 PM</li>
                  <li><i className="far fa-clock text-primary me-2"></i>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralDentistry;
