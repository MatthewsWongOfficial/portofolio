import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import BackToTopButton from './components/BackToTopButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import './App.css';

const App = () => {
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const [notificationShown, setNotificationShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!notificationShown) {
        setNotificationShown(true);
        toast.info("Don't forget to connect with me on LinkedIn!");
      }
    }, 5000); // Show notification after 5 seconds

    return () => clearTimeout(timer);
  }, [notificationShown]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        scrollToSection(skillsRef);
      } else {
        scrollToSection(educationRef);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <div ref={educationRef}>
          <LandingPage />
        </div>
        <div ref={skillsRef}>
          <Education />
        </div>
        <div ref={certificationsRef}>
          <Skills />
        </div>
        <Certifications />
        {/* Add more components for other sections */}
      </div>
      <ToastContainer position="bottom-right" autoClose={9000} />
      <BackToTopButton />
    </div>
  );
};

export default App;
