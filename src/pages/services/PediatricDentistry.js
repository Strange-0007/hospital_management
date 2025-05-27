import React from 'react';
import { Link } from 'react-router-dom';
import service4 from '../../assets/images/service-4.jfif';

const PediatricDentistry = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Pediatric Dentistry</h1>
            <img src={service4} alt="Pediatric Dentistry" className="img-fluid rounded mb-4" />
            
            <h4 className="text-primary mt-5">Child-Friendly Dental Care</h4>
            <p className="lead">
              Our pediatric dentistry services are designed to provide gentle, effective dental care in a comfortable environment for children.
            </p>
            
            <p>
              At Prime Dental Care, we understand that a positive dental experience during childhood builds the foundation for lifelong oral health. Our pediatric dental team specializes in treating children from infancy through adolescence, creating a fun, educational, and stress-free environment that helps children develop positive associations with dental visits.
            </p>

            <h4 className="text-primary mt-4">Our Pediatric Dentistry Services Include:</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Child-Friendly Dental Examinations</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Gentle Cleanings</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Fluoride Treatments</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Dental Sealants</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Early Orthodontic Assessment</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Habit Counseling (Thumb Sucking, Pacifier Use)</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Dietary and Nutrition Counseling</li>
            </ul>
            
            <h4 className="text-primary mt-4">Creating Positive Dental Experiences</h4>
            <p>
              Our pediatric dentistry approach focuses on education and prevention. We take time to explain procedures to children in age-appropriate language, demonstrate techniques with kid-friendly tools, and celebrate their successes. Our goal is to help children feel comfortable and confident during dental visits, setting them up for a lifetime of good oral health habits.
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
                  <li className="list-group-item active">Pediatric Dentistry</li>
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

export default PediatricDentistry;
