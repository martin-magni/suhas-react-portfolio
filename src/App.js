import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Suhas N Kumar. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;