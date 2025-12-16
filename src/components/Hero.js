import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      
      <div className="hero-two-column">
        
        {/* Left Column: Text and Buttons */}
        <div className="hero-text-content">
            <h1>Suhas N Kumar</h1>
            <p className="tagline">
              Highly motivated and analytically-minded individual | BCA in Cyber Security
            </p>
            <p className="summary">
              Seeking a challenging role to leverage my strong analytical skills, operational efficiency, and interpersonal effectiveness to drive organizational success and continuous improvement.
            </p>
            <div className="key-metrics">
              <span>
                <strong>CGPA:</strong> 8.33 (through 4th semester)
              </span>
              <span>
                <strong>Specialization:</strong> Cyber Security
              </span>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">Get In Touch</a>
              <a href="https://linkedin.com/in/suhas-n-kumar-68411a249/" target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn Profile</a>
            </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="profile-image-container">
            {/* The src attribute is now guaranteed to work if the file name is snk.jpg */}
            <img src="/snk.jpg" alt="Suhas N Kumar Professional Headshot" className="profile-image" />
        </div>

      </div>
    </section>
  );
}

export default Hero;