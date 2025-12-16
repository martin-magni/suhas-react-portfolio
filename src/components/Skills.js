import React from 'react';

function Skills() {
  const technicalSkills = {
    'Programming': ['#C', 'C++', 'Python', 'JavaScript'],
    'Web Stacks': ['LAMP Stack', 'MERN Stack'],
    'Data/Tools': ['MS Excel (Pivot Tables)', 'Power BI', 'MS PowerPoint'],
    'CRM': ['Salesforce']
  };

  const softSkills = ['Leadership', 'Critical thinking', 'Problem Solving', 'Empathetic Communication'];
  const certifications = [
    'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification',
    'IBM Customer Engagement: Problem Solving and Process Controls',
    'IBM Artificial Intelligence Fundamentals'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills, Talents & Certifications</h2>

      <div className="skills-group">
        <h3>Technical Aptitude</h3>
        {Object.entries(technicalSkills).map(([category, list]) => (
          <div key={category} className="skill-category">
            <h4>{category}:</h4>
            <p>
              {list.map((item, index) => (
                <span key={index} className="skill-item">
                  {item}
                  {index < list.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="skills-group">
        <h3>Leadership & Communication Skills</h3>
        <p>{softSkills.join(', ')}</p>
      </div>

      <div className="skills-group">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((cert, index) => <li key={index}>{cert}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default Skills;