import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-details">
        <p>I am actively seeking challenging roles. Please connect using the details below:</p>
        
        <div className="contact-info-grid">
          <div>
            <h4>Contact Information:</h4>
            <p><strong>Email:</strong> <a href="mailto:suhasnkumar3114@gmail.com">suhasnkumar3114@gmail.com</a></p>
            <p><strong>Phone:</strong> 9019179445</p>
            <p><strong>Location:</strong> Bangalore, IND</p>
          </div>
          
          <div>
            <h4>Professional Links:</h4>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/suhas-n-kumar-68411a249/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>
                <strong>GitHub:</strong> 
                <a href="https://github.com/martin-magni" target="_blank" rel="noopener noreferrer">
                    martin-magni
                </a>
            </p>
            <p>
                <strong>Resume:</strong> 
                <a 
                    href="/Suhas_N_Kumar_Resume.pdf" 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </p>
          </div>
        </div>
      </div>

      <div className="languages-section">
        <h3>Language Proficiency</h3>
        <p><strong>Kannada:</strong> Mother Tongue</p>
        <p><strong>English:</strong> Near Native</p>
        <p><strong>Hindi:</strong> Near Native</p>
        <p><strong>Telugu:</strong> Basic Communication</p>
        <p><strong>Spanish:</strong> Basic Communication (Learning)</p>
      </div>
    </section>
  );
}

export default Contact;