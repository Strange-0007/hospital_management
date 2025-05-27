import React from 'react';
import { Link } from 'react-router-dom';
import service5 from '../../assets/images/service-5.jpeg';

const OralSurgery = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Oral Surgery</h1>
            <img src={service5} alt="Oral Surgery" className="img-fluid rounded mb-4" />
            
            <h4 className="text-primary mt-5">Advanced Surgical Solutions</h4>
            <p className="lead">
              Our oral surgery services address complex dental issues with precision and care for optimal recovery and results.
            </p>
            
            <p>
              At Prime Dental Care, our skilled oral surgeons perform a wide range of surgical procedures to address issues that require more specialized treatment. Using state-of-the-art technology and advanced techniques, we ensure precision, efficiency, and comfort throughout your surgical experience.
            </p>

            <h4 className="text-primary mt-4">Our Oral Surgery Services Include:</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Wisdom Teeth Extraction</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Dental Implant Placement</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Bone Grafting</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Jaw Surgery (Orthognathic Surgery)</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Surgical Treatment of Facial Trauma</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Treatment of Oral Pathologies</li>
            </ul>
            
            <h4 className="text-primary mt-4">Comfortable Surgical Experience</h4>
            <p>
              We understand that oral surgery can cause anxiety for many patients. That's why we prioritize your comfort through every step of the process. From thorough pre-operative consultations to various sedation options and detailed aftercare instructions, our team ensures you feel informed, prepared, and at ease throughout your treatment journey.
            </p>
            
            <div className="mt-5">
              <Link to="/#book" className="btn btn-primary me-3">
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
                  <li className="list-group-item"><Link to="/services/general-dentistry" className="text-decoration-none">General Dentistry</Link></li>
                  <li className="list-group-item"><Link to="/services/cosmetic-dentistry" className="text-decoration-none">Cosmetic Dentistry</Link></li>
                  <li className="list-group-item"><Link to="/services/orthodontics" className="text-decoration-none">Orthodontics</Link></li>
                  <li className="list-group-item"><Link to="/services/pediatric-dentistry" className="text-decoration-none">Pediatric Dentistry</Link></li>
                  <li className="list-group-item active">Oral Surgery</li>
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

export default OralSurgery;
