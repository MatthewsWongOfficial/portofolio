import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import BackToTopButton from './components/BackToTopButton';
import { MDBContainer, MDBNotification } from 'mdbreact'; // Assuming you have imported MDBContainer and MDBNotification from 'mdbreact'
import './App.css';

const App = () => {
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);

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
      <div className="notification-container">
      <MDBContainer>
  <MDBNotification
    iconClassName="text-primary"
    show
    fade
    title="From: Matthews Wong"
    message="Don't forget to connect with me on LinkedIn!"
    customIcon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-x-circle-fill btn-close"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8A8 8 0 0 0 8 0zm4.354 11.354a.5.5 0 0 1-.708 0L8 8.707l-3.646 3.647a.5.5 0 0 1-.708-.708L7.293 8 3.646 4.354a.5.5 0 0 1 .708-.708L8 7.293l3.646-3.647a.5.5 0 0 1 .708.708L8.707 8l3.647 3.646a.5.5 0 0 1 0 .708z"
        />
      </svg>
    }
    customClass="custom-notification"
  />
</MDBContainer>



      </div>
      <BackToTopButton />
    </div>
  );
};

export default App;
