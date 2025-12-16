import React from 'react';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="#home">Suhas N Kumar</a>
      </div>
      
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;