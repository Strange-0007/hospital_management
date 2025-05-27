import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images - you'll need to add these actual images to your assets folder
import doctorImg1 from '../assets/images/doctor-1.jpeg';
import doctorImg2 from '../assets/images/doctor-2.jpeg';
import doctorImg3 from '../assets/images/doctor-3.jpeg';
import doctorImg4 from '../assets/images/doctor-4.jpeg';
import bgPattern from '../assets/images/pattern-bg.jpg';

const Doctors = () => {
  // Doctor data
  const doctorsList = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: doctorImg1,
      specialty: "General Dentistry",
      experience: "15+ Years Experience",
      education: "DMD, Harvard School of Dental Medicine",
      bio: "Dr. Johnson specializes in preventive care and comprehensive dental treatments. Her gentle approach and attention to detail have made her a favorite among patients of all ages.",
      achievements: ["American Dental Association Fellow", "Best Dentist Award 2021", "Published in Journal of Dental Research"],
      languages: ["English", "Spanish"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image: doctorImg2,
      specialty: "Cosmetic Dentistry",
      experience: "12+ Years Experience",
      education: "DDS, NYU College of Dentistry",
      bio: "With a passion for aesthetic dentistry, Dr. Chen helps patients achieve their dream smiles through state-of-the-art cosmetic procedures, including veneers, whitening, and smile makeovers.",
      achievements: ["American Academy of Cosmetic Dentistry Member", "Invisalign Preferred Provider", "Leading expert in dental veneers"],
      languages: ["English", "Mandarin"]
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      image: doctorImg3,
      specialty: "Orthodontics",
      experience: "10+ Years Experience",
      education: "DMD, University of Pennsylvania; MS in Orthodontics",
      bio: "Dr. Patel specializes in correcting misalignments and creating beautiful smiles through braces and Invisalign. She is known for her personalized treatment plans and caring approach.",
      achievements: ["Board Certified Orthodontist", "Invisalign Diamond Provider", "Published research on accelerated orthodontic treatment"],
      languages: ["English", "Hindi", "Gujarati"]
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      image: doctorImg4,
      specialty: "Oral Surgery",
      experience: "18+ Years Experience",
      education: "DDS, UCLA School of Dentistry; Oral Surgery Residency, Mayo Clinic",
      bio: "Dr. Wilson is our oral surgery expert, specializing in dental implants, wisdom teeth extraction, and oral pathology. His extensive surgical experience ensures patients receive exceptional care.",
      achievements: ["American Association of Oral and Maxillofacial Surgeons Fellow", "Pioneer in minimally invasive extraction techniques", "Clinical Professor at State University"],
      languages: ["English", "French"]
    }
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="doctors-page">
      {/* Hero Section */}
      <section className="doctors-hero" style={{
        background: `linear-gradient(rgba(42, 92, 130, 0.85), rgba(23, 162, 184, 0.85)), url(${bgPattern})`,
        backgroundSize: 'cover',
        paddingTop: '150px',
        paddingBottom: '100px',
      }}>
        <div className="container text-center text-white">
          <h1 className="display-3 fw-bold mb-4">Meet Our Expert Dentists</h1>
          <p className="lead mb-0 mx-auto" style={{maxWidth: '700px'}}>
            Our team of highly skilled and experienced dental professionals are dedicated to providing 
            you with the highest standard of care in a comfortable environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row g-5">
            {/* Doctor Filter Sidebar */}
            <div className="col-lg-3">
              <div className="sidebar-wrapper bg-white p-4 rounded-3 shadow-sm sticky-top" style={{top: '120px'}}>
                <h4 className="border-bottom pb-3 mb-4">Find a Doctor</h4>
                
                <div className="mb-4">
                  <label className="form-label fw-bold">Specialty</label>
                  <select className="form-select border-0 shadow-sm">
                    <option value="">All Specialties</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="oral">Oral Surgery</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                  </select>
                </div>
                
                <div className="d-grid">
                  <Link to="/booking" className="btn btn-primary py-3">
                    <i className="fas fa-calendar-check me-2"></i>
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Doctors Grid */}
            <div className="col-lg-9">
              <div className="row g-4">
                {doctorsList.map(doctor => (
                  <div key={doctor.id} className="col-md-6 col-lg-6">
                    <div 
                      className="doctor-card bg-white rounded-4 overflow-hidden shadow-hover h-100"
                      onClick={() => setSelectedDoctor(doctor)}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="position-relative doctor-image-container">
                        <img 
                          src={doctor.image} 
                          className="doctor-image img-fluid w-100"
                          alt={doctor.name}
                          style={{
                            height: '300px',
                            objectFit: 'cover',
                            objectPosition: 'top'
                          }}
                        />
                        <div className="doctor-specialty position-absolute bottom-0 start-0 py-2 px-4 text-white"
                          style={{background: 'rgba(42, 92, 130, 0.85)'}}
                        >
                          <span>{doctor.specialty}</span>
                        </div>
                        <div className="doctor-experience position-absolute top-0 end-0 py-2 px-3 m-3 rounded-pill bg-success text-white">
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="doctor-name text-primary mb-2">{doctor.name}</h4>
                        <p className="doctor-education text-muted mb-3">{doctor.education}</p>
                        <p className="doctor-bio mb-4">{doctor.bio}</p>
                        
                        <div className="d-flex justify-content-between align-items-end">
                          <div>
                            <span className="badge bg-light text-dark me-2 mb-2">
                              <i className="fas fa-award text-primary me-1"></i>
                              {doctor.achievements.length} Achievements
                            </span>
                            <span className="badge bg-light text-dark mb-2">
                              <i className="fas fa-language text-primary me-1"></i>
                              {doctor.languages.join(', ')}
                            </span>
                          </div>
                          <button className="btn btn-sm btn-outline-primary">View Profile</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctor Modal */}
      {selectedDoctor && (
        <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{selectedDoctor.name}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedDoctor(null)}></button>
              </div>
              <div className="modal-body p-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={selectedDoctor.image} 
                      className="img-fluid w-100 h-100" 
                      style={{objectFit: 'cover'}}
                      alt={selectedDoctor.name} 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-4">
                      <h4 className="text-primary">{selectedDoctor.name}</h4>
                      <p className="text-success mb-2">{selectedDoctor.specialty}</p>
                      <p className="text-muted mb-4">{selectedDoctor.education}</p>
                      <p className="mb-4">{selectedDoctor.bio}</p>
                      
                      <h5 className="mb-3">Achievements</h5>
                      <ul className="list-unstyled mb-4">
                        {selectedDoctor.achievements.map((achievement, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-award text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      <h5 className="mb-3">Languages</h5>
                      <p className="mb-4">
                        {selectedDoctor.languages.map((language, index) => (
                          <span key={index} className="badge bg-light text-dark me-2 mb-2">{language}</span>
                        ))}
                      </p>
                      
                      <div className="d-grid">
                        <Link to="/booking" className="btn btn-primary py-2">
                          <i className="fas fa-calendar-check me-2"></i>
                          Book an Appointment with {selectedDoctor.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS for enhanced styling */}
      <style jsx>{`
        .doctors-page {
          --transition-ease: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .shadow-hover {
          transition: var(--transition-ease);
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .shadow-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .doctor-card {
          border: none;
        }
        
        .doctor-card:hover .doctor-image {
          transform: scale(1.03);
        }
        
        .doctor-image {
          transition: var(--transition-ease);
        }
        
        .doctor-image-container {
          overflow: hidden;
        }
        
        .doctor-specialty {
          border-top-right-radius: 20px;
          transform: translateY(5px);
        }
        
        .doctor-experience {
          background: linear-gradient(45deg, #17a2b8, #28a745);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .modal {
          backdrop-filter: blur(5px);
        }
      `}</style>
      
      {/* Team Values Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Team Values</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We are unified by our commitment to providing exceptional dental care
              and putting our patients first in everything we do.
            </p>
          </div>
          
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="value-card text-center p-4 rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6',
                transition: 'all 0.3s ease'
              }}>
                <div className="value-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '2rem'
                }}>
                  <i className="fas fa-user-md"></i>
                </div>
                <h3 className="h4 mb-3">Expertise</h3>
                <p className="mb-0">Our doctors pursue ongoing education to stay at the forefront of dental advancements and techniques.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="value-card text-center p-4 rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6',
                transition: 'all 0.3s ease'
              }}>
                <div className="value-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '2rem'
                }}>
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="h4 mb-3">Compassion</h3>
                <p className="mb-0">We believe in treating each patient with empathy, understanding, and personalized care.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="value-card text-center p-4 rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid #dee2e6',
                transition: 'all 0.3s ease'
              }}>
                <div className="value-icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '2rem'
                }}>
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <h3 className="h4 mb-3">Quality</h3>
                <p className="mb-0">We are committed to excellence in everything we do, from patient care to the materials and technologies we use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-5 text-white" style={{
        background: 'linear-gradient(45deg, #2A5C82, #17A2B8)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container position-relative" style={{zIndex: 10}}>
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">Join Our Team of Dental Professionals</h2>
              <p className="lead mb-0">We're always looking for talented dentists and specialists to join our growing practice.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/careers" className="btn btn-lg btn-light px-4 py-3">
                <i className="fas fa-user-plus me-2"></i>
                View Open Positions
              </a>
            </div>
          </div>
        </div>
        
        {/* Background animated shapes */}
        <div className="shape shape-1" style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }}></div>
        <div className="shape shape-2" style={{
          position: 'absolute',
          bottom: '-30px',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
        }}></div>
      </section>
    </div>
  );
};

export default Doctors;
