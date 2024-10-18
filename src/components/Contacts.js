import React from 'react';

const Contacts = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contacts">
      <div className="header">
        <h2>
          <i className="fas fa-comment-dots"></i>Connect with me
        </h2>
        <button onClick={scrollToTop} className="btn">
          Back to Home
        </button>
      </div>
      <div className="contact-info">
        <div className="contact-card">
          <a href="mailto:pavelpolosin@gmail.com">
            <h4><i className="fas fa-envelope"></i> Email</h4>
          </a>
        </div>
        
        <div className="contact-card">
          <a href="https://github.com/Odrozkeskal" target="_blank" rel="noopener noreferrer">
            <h4><i className="fab fa-github"></i> GitHub</h4>
          </a>
        </div>
        
        <div className="contact-card">
          <a href="https://www.linkedin.com/in/pavel-polosin-624757314/" target="_blank" rel="noopener noreferrer">
            <h4><i className="fab fa-linkedin"></i> LinkedIn</h4>
          </a>
        </div>

        <div className="contact-card">
          <a href="https://wa.me/+972557732564" target="_blank" rel="noopener noreferrer">
            <h4><i className="fab fa-whatsapp"></i> WhatsApp</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
