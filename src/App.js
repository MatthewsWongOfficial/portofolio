import React from 'react';
import { useSpring, animated } from 'react-spring';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

const App = () => {
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.div style={fadeProps} className="app-container">
      <Header />
      <LandingPage />
      <Education />
      <Skills />
      <Certifications />
      {/* Add more components for other sections */}
      <BackToTopButton />
    </animated.div>
  );
};

export default App;