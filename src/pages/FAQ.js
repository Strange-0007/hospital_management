import React from 'react';

const FAQ = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h5>What services do you offer?</h5>
          <p>We offer a wide range of dental services, including general dentistry, cosmetic dentistry, orthodontics, and more.</p>
        </div>
        <div className="faq-item">
          <h5>Do you accept insurance?</h5>
          <p>Yes, we accept most major insurance plans. Please contact us for more details.</p>
        </div>
        <div className="faq-item">
          <h5>How can I book an appointment?</h5>
          <p>You can book an appointment online through our website or call us directly at <a href="tel:+911234567890">+91 12345 67890</a>.</p>
        </div>
        <div className="faq-item">
          <h5>What are your working hours?</h5>
          <p>Our clinic is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays.</p>
        </div>
        <div className="faq-item">
          <h5>Do you provide emergency services?</h5>
          <p>Yes, we offer 24/7 emergency dental services. Please call our emergency number for immediate assistance.</p>
        </div>
        <div className="faq-item">
          <h5>Do you treat children?</h5>
          <p>Yes, we have specialized pediatric dentists to provide dental care for children in a friendly and comfortable environment.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
