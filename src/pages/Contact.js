import React from 'react';

const Contact = () => {
  return (
    <section className="py-5" style={{paddingTop: '100px !important'}}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="contact-card p-5 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Get in Touch</h2>
              <form>
                <div className="mb-4">
                  <label className="form-label text-muted">Full Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Message</label>
                  <textarea className="form-control" rows="4" style={{resize: 'none'}} required></textarea>
                </div>
                <button className="btn btn-primary w-100 py-3">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-primary text-white p-5 rounded-4 hover-3d">
              <h3 className="mb-4">Contact Information</h3>
              <div className="d-flex gap-3 mb-4">
                <div className="contact-icon text-primary">
                  <i className="fas fa-map-marker-alt fs-4"></i>
                </div>
                <div>
                  <h5>Our Clinic</h5>
                  <p className="mb-0 opacity-75">123 Dental Street<br />Mumbai, India 400001</p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <div className="contact-icon text-primary">
                  <i className="fas fa-phone-alt fs-4"></i>
                </div>
                <div>
                  <h5>Phone Numbers</h5>
                  <p className="mb-0 opacity-75">
                    Emergency: +91 12345 67890<br />
                    Reception: +91 09876 54321
                  </p>
                </div>
              </div>
              <div className="map-container mt-4 shadow-lg">
                <iframe 
                  src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  className="w-100" 
                  style={{height: '250px', border: '0'}} 
                  allowFullScreen
                  loading="lazy"
                  title="Google Map">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
