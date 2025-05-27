import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import heroDental from '../assets/images/hero-dental.jpg';
import service1 from '../assets/images/service-1.jpeg';
import service2 from '../assets/images/service-2.jpeg';
import service3 from '../assets/images/service-3.jpeg';
import service4 from '../assets/images/service-4.jfif';
import service5 from '../assets/images/service-5.jpeg';
import service6 from '../assets/images/service-6.jfif';
import reason1 from '../assets/images/reason1.jpeg';
import reason2 from '../assets/images/reason2.jpeg';
import reason3 from '../assets/images/reason3.jpeg';
import reason4 from '../assets/images/reason4.jpeg';
import reason5 from '../assets/images/reason5.jpeg';
import heroBg from '../assets/images/hero-bg.jpeg';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4 text-white">Advanced Dental Care with Precision & Comfort</h1>
              <div className="d-flex gap-3 mb-4">
                <div className="bg-primary p-3 rounded text-white">
                  <h4>1500+</h4>
                  <p className="mb-0">Happy Patients</p>
                </div>
                <div className="bg-success p-3 rounded text-white">
                  <h4>25+</h4>
                  <p className="mb-0">Expert Dentists</p>
                </div>
              </div>
              <a href="#services" className="btn btn-lg btn-primary px-5 py-3 hover-3d">
                Explore Services <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img src={heroDental} alt="Dental Care" 
                    className="img-fluid rounded-4 shadow-lg hover-3d"
                    style={{transform: 'rotate(-3deg)'}} />
                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end">
                  <h5 className="mb-0">24/7 Emergency Service Available</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Specialized Services</h2>
            <p className="text-muted">Comprehensive dental care solutions</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service1} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-tooth me-2"></i>General Dentistry</h5>
                  <p className="card-text">Preventive care and routine dental examinations</p>
                  <Link to="/services/general-dentistry" className="stretched-link"></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service2} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-star me-2"></i>Cosmetic Dentistry</h5>
                  <p className="card-text">Smile makeovers, veneers, whitening, and aesthetic enhancements</p>
                  <Link to="/services/cosmetic-dentistry" className="stretched-link"></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service3} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-teeth me-2"></i>Orthodontics</h5>
                  <p className="card-text">Braces, clear aligners, and teeth straightening solutions</p>
                  <Link to="/services/orthodontics" className="stretched-link"></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service4} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-child me-2"></i>Pediatric Dentistry</h5>
                  <p className="card-text">Specialized dental care for children in a comfortable environment</p>
                  <Link to="/services/pediatric-dentistry" className="stretched-link"></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service5} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-teeth-open me-2"></i>Oral Surgery</h5>
                  <p className="card-text">Wisdom teeth extraction, dental implants, and surgical procedures</p>
                  <Link to="/services/oral-surgery" className="stretched-link"></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0">
                <img src={service6} className="card-img-top" alt="Service" />
                <div className="card-body">
                  <h5 className="card-title"><i className="fas fa-head-side-mask me-2"></i>Root Canal Treatment</h5>
                  <p className="card-text">Advanced endodontic procedures with minimal discomfort</p>
                  <Link to="/services/root-canal-treatment" className="stretched-link"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Patients Say</h2>
            <p className="text-muted">Real feedback from our valued patients</p>
          </div>
          
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="testimonial-card card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">Emily Wilson</h5>
                        <div className="text-warning mb-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <p className="card-text">"The entire staff is professional and caring. My dental anxiety is a thing of the past!"</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="testimonial-card card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">Robert Chen</h5>
                        <div className="text-warning mb-2">
                          <i className="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="card-text">"State-of-the-art equipment and techniques. They explained everything thoroughly before treatment."</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="testimonial-card card h-100 border-0 shadow-sm">
                      <div class="card-body">
                        <h5 class="card-title">Sophia Rodriguez</h5>
                        <div class="text-warning mb-2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"My child loves coming here! The pediatric dental team makes the experience fun and stress-free."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center">
                  <div class="col-md-4">
                    <div class="testimonial-card card h-100 border-0 shadow-sm">
                      <div class="card-body">
                        <h5 class="card-title">John Doe</h5>
                        <div class="text-warning mb-2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"Excellent service and friendly staff. The dentists are thorough and gentle. Highly recommend!"</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="testimonial-card card h-100 border-0 shadow-sm">
                      <div class="card-body">
                        <h5 class="card-title">Jane Smith</h5>
                        <div class="text-warning mb-2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="card-text">"The best dental care I've ever experienced. Professional and courteous team. My family has been coming here for years."</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="testimonial-card card h-100 border-0 shadow-sm">
                      <div class="card-body">
                        <h5 class="card-title">Michael Johnson</h5>
                        <div class="text-warning mb-2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"Great experience! The staff was very helpful and the service was top-notch. I no longer fear dental visits."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators position-relative mt-3">
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active bg-primary" aria-current="true"></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" class="bg-primary"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">Ready to Schedule Your Visit?</h2>
              <p className="lead">Book an appointment with our dental specialists today.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/booking" className="btn btn-light btn-lg px-5 py-3 hover-3d">
                <i className="fas fa-calendar-check me-2"></i>Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-4 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Location</h2>
              <p className="lead text-muted mb-5">Find us at the heart of the city, close to CEG Anna University</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="map-container shadow-lg rounded overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=CEG%20Anna%20University%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-100" 
                  style={{height: '450px', border: '0'}} 
                  allowFullScreen
                  loading="lazy"
                  title="CEG Anna University Map"
                  aria-label="CEG Anna University Location Map">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Health Importance Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-5 text-center">
              <h2 className="display-5 fw-bold mb-3">Why Should We Protect Our Teeth?</h2>
              <p className="lead text-muted">The value of our teeth is way beyond just a pretty smile. Here's why keeping our white pearls healthy is important.</p>
            </div>
          </div>
          
          <div className="row g-4 mb-5 align-items-center">
            <div className="col-md-6">
              <img src={reason1} alt="Healthy Teeth for Eating" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Essential for Eating</h3>
              <p className="lead">Strong, healthy teeth help you to chew your food properly, which is very essential for digestion and nutrient absorption.</p>
            </div>
          </div>
          
          <div className="row g-4 mb-5 align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src={reason2} alt="Speech and Communication" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Speech and Communication</h3>
              <p className="lead">Teeth also play a role in the pronunciation of words that you speak. Poor dental health which can cause falling of teeth can lead to unclear speech which can impact your communication and personality.</p>
            </div>
          </div>
          
          <div className="row g-4 mb-5 align-items-center">
            <div className="col-md-6">
              <img src={reason3} alt="Confidence Booster" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Confidence Booster</h3>
              <p className="lead">Smile is the first expression which you give to any person and it makers your first impression. Shouldn't the first impression be the best impression? A healthy smile will not only boost your confidence but also gives a good impression about you to others.</p>
            </div>
          </div>
          
          <div className="row g-4 mb-5 align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src={reason4} alt="Overall Health Connection" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Overall Health Connection</h3>
              <p className="lead">Oral health is like the starting point of your overall health. Neglected dental issues like gum disease can increase the risk of cancer, jaw pain, and sometimes even diabetes.</p>
            </div>
          </div>
          
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={reason5} alt="Pain Prevention" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Pain Prevention</h3>
              <p className="lead">Taking good care of your teeth by brushing twice helps prevent cavities, toothaches, and gum infections, protecting you from unbearable tooth aches and dental procedures.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
