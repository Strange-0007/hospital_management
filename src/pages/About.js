import React from 'react';

// Import images
import clinicInterior from '../assets/images/clinic-interior.jpg';
import drSharma from '../assets/images/service-5.jpeg';

const About = () => {
  return (
    <div >
      {/* Mission Section */}
      <section className="py-5 bg-light" style={{marginTop: '100px', background: `linear-gradient(rgba(42,92,130,0.9), rgba(23,162,184,0.8)), url(${clinicInterior}) center/cover`}}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="mission-card p-5 hover-3d">
                <h2 className="text-primary mb-4">Our Mission</h2>
                <p className="lead">To provide compassionate, cutting-edge dental care that transforms smiles and lives.</p>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fas fa-check-circle text-teal me-2"></i>Patient-Centered Approach</li>
                  <li className="mb-3"><i className="fas fa-check-circle text-teal me-2"></i>Advanced Technology</li>
                  <li className="mb-3"><i className="fas fa-check-circle text-teal me-2"></i>Affordable Excellence</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h3 className="text-primary mb-4">Why Choose Us?</h3>
                <div className="d-flex gap-4 mb-4">
                  <div className="contact-icon text-primary">
                    <i className="fas fa-user-md fs-4"></i>
                  </div>
                  <div>
                    <h5>Expert Dentists</h5>
                    <p>Our team consists of highly trained dental professionals.</p>
                  </div>
                </div>
                <div className="d-flex gap-4 mb-4">
                  <div className="contact-icon text-primary">
                    <i className="fas fa-award fs-4"></i>
                  </div>
                  <div>
                    <h5>Certified Experts</h5>
                    <p>ISO 9001 Certified Dental Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Experts</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-member-card position-relative">
                <div className="experience-badge">15+ Years</div>
                <img src={drSharma} alt="Dr. Sharma" className="img-fluid" />
                <div className="p-4">
                  <h4 className="text-primary">Dr. Anika Sharma</h4>
                  <p className="text-muted">Chief Dental Surgeon</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="team-member-card position-relative">
                <div className="experience-badge">12+ Years</div>
                <img src={require('../assets/images/doctor-2.jpeg')} alt="Dr. Robert Chen" className="img-fluid" />
                <div className="p-4">
                  <h4 className="text-primary">Dr. Robert Chen</h4>
                  <p className="text-muted">Cosmetic Dentistry Specialist</p>
                  <p className="small text-muted mt-2">Dr. Chen specializes in smile makeovers and advanced cosmetic procedures. He has performed over 2,000 successful veneers and whitening treatments.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="team-member-card position-relative">
                <div className="experience-badge">10+ Years</div>
                <img src={require('../assets/images/doctor-3.jpeg')} alt="Dr. Sarah Johnson" className="img-fluid" />
                <div className="p-4">
                  <h4 className="text-primary">Dr. Sarah Johnson</h4>
                  <p className="text-muted">Orthodontics Expert</p>
                  <p className="small text-muted mt-2">Dr. Johnson is a certified Invisalign provider with expertise in correcting complex teeth alignment issues for patients of all ages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
