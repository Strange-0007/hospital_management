import React from 'react';
import { Link } from 'react-router-dom';
import service2 from '../../assets/images/service-2.jpeg';

const CosmeticDentistry = () => {
  return (
    <section className="py-5" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Cosmetic Dentistry</h1>
            <img src={service2} alt="Cosmetic Dentistry" className="img-fluid rounded mb-4" />
            
            <h4 className="text-primary mt-5">Transform Your Smile</h4>
            <p className="lead">
              Our cosmetic dentistry services can help you achieve a brighter, more beautiful smile that enhances your natural features.
            </p>
            
            <p>
              At Prime Dental Care, we understand that your smile is one of your most important features. Our cosmetic dentistry services combine art and science to give you the smile you've always wanted. Whether you're looking to brighten your teeth, fix imperfections, or completely transform your smile, our cosmetic dental team has solutions tailored to your needs.
            </p>

            <h4 className="text-primary mt-4">Our Cosmetic Dentistry Services Include:</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Professional Teeth Whitening</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Porcelain Veneers</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Dental Bonding</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Smile Makeovers</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Tooth Contouring & Reshaping</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>Aesthetic Gum Treatments</li>
            </ul>
            
            <h4 className="text-primary mt-4">The Benefits of Cosmetic Dentistry</h4>
            <p>
              Beyond just improving your smile's appearance, cosmetic dentistry can boost your self-confidence, improve oral function, and even motivate better oral hygiene habits. Our treatments are designed to be durable, natural-looking, and tailored to your unique dental structure.
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
                  <li className="list-group-item active">Cosmetic Dentistry</li>
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

export default CosmeticDentistry;
