// src/App.js
import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Education />
      <Skills />
      <Certifications />
      {/* Add more components for other sections */}
      <BackToTopButton />
    </div>
  );
};

export default App;
