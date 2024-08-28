import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../assets/profile-pic.png'; 
import Typewriter from './Typewriter';
import './LandingPage.css'; // Import the custom CSS for the LandingPage
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linked.png';
import codepenLogo from '../assets/codepen.png';

const LandingPage = () => {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the fade-in effect after a short delay
    const timeout = setTimeout(() => {
      setImageVisible(true);
    }, 500);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  return (
    <Container id="landing-page" className="py-5 text-center">
      <Row className="align-items-center">
        <Col md={4} className={`mb-4 mb-md-0 ${imageVisible ? 'fade-in' : ''}`}>
          <div className={`profile-picture-container ${imageVisible ? 'visible' : ''}`}>
            <Image
              src={profilePic}
              alt="Matthews Wong"
              className="profile-picture"
              roundedCircle
            />
          </div>
        </Col>

        <Col md={8}>
          <div className="greetings-container p-4">
            <h2 className="mb-4">
              Hello Everyone!{' '}
              <br className="d-md-none" /> {/* Line break for mobile */}
              I am{' '}
              <Typewriter text="Matthews Wong" delay={100} />
            </h2>
            <p>
              I'm a student at Swiss German University, majoring in Information Technology. I'm passionate about using technology to solve real-world problems, and I'm always on the lookout for new opportunities to grow my skills and knowledge.
            </p>
            <p>
              I’m always eager to learn new things and take on new challenges. If you share the same passion for technology and problem-solving, feel free to reach out to me.
            </p>

            {/* Action buttons with logos and names */}
            <div className="action-buttons mt-4 d-flex justify-content-center">
              <div className="logo-container text-center mx-3">
                <a href="https://github.com/MatthewsWongOfficial" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" className="logo-button mb-2" />
                </a>
                <div className="caption">GitHub</div>
              </div>
              <div className="logo-container text-center mx-3">
                <a href="https://www.linkedin.com/in/matthewswong/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="logo-button mb-2" />
                </a>
                <div className="caption">LinkedIn</div>
              </div>
              <div className="logo-container text-center mx-3">
                <a href="https://codepen.io/Matthews-Wong" target="_blank" rel="noopener noreferrer">
                  <img src={codepenLogo} alt="CodePen" className="logo-button mb-2" />
                </a>
                <div className="caption">CodePen</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
