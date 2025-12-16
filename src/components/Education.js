import React from 'react';

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education & Achievements</h2>
      
      <div className="education-card">
        <h3>Bachelor of Computer Application (BCA)</h3>
        <h4>Srinivas University, Bangalore, IND</h4>
        <p>Specialization: Cyber Security</p>
        <p>Expected Graduation: August, 2026</p>
        <p>Academic Standing: **8.33 CGPA** (through the 4th semester)</p>
      </div>

      <div className="education-card">
        <h3>Pre-University Course (2nd PUC / 12th)</h3>
        <h4>Vidya Junior College, Chittoor, IND</h4>
        <p>Subjects: Physics, Chemistry, Mathematics (PCM)</p>
        <p>Percentage: 63.20%</p>
      </div>

      <div className="achievements-card">
        <h3>Additional Achievements</h3>
        <ul>
          <li>Member of Literary Club at Srinivas University</li>
          <li>Chess Champion at Srinivas University Sports League</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;