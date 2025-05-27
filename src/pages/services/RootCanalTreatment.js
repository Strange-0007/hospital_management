import React from 'react';
import { Link } from 'react-router-dom';
import service6 from '../../assets/images/service-6.jfif';

const RootCanalTreatment = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Root Canal Treatment</h1>
            <img src={service6} alt="Root Canal Treatment" className="img-fluid rounded mb-4" />
            
            <h4 className="text-primary mt-5">Save Your Natural Teeth</h4>
            <p className="lead">
              Our advanced endodontic procedures effectively treat infected teeth with minimal discomfort, preserving your natural smile.
            </p>
            
            <p>
              At Prime Dental Care, our endodontic specialists are experts in saving teeth that might otherwise need to be extracted due to infection or damage. Modern root canal treatment is far more comfortable than its reputation suggests, often comparable to receiving a routine filling. Our advanced techniques and technology ensure effective treatment while keeping you comfortable throughout the procedure.
            </p>

            <h4 className="text-primary mt-4">Our Root Canal Treatment Services Include:</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Standard Root Canal Therapy</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Emergency Root Canal Treatment</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Retreatment of Failed Root Canals</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Apicoectomy (Root-End Surgery)</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Treatment of Dental Trauma</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Management of Complex Root Canal Systems</li>
            </ul>
            
            <h4 className="text-primary mt-4">Why Choose Root Canal Treatment?</h4>
            <p>
              Root canal treatment allows you to save your natural tooth, which is always the preferable option when possible. Preserving your natural tooth maintains normal biting force and sensation, efficient chewing, natural appearance, and protects other teeth from excessive wear or strain. With proper care, most teeth that have had root canal treatment can last a lifetime.
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
                  <li className="list-group-item"><Link to="/services/oral-surgery" className="text-decoration-none">Oral Surgery</Link></li>
                  <li className="list-group-item active">Root Canal Treatment</li>
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

export default RootCanalTreatment;
