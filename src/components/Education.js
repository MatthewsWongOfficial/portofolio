import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import sguLogo from '../assets/sgu-logo.png'; // Import the SGU logo
import kinderfieldLogo from '../assets/kinderfield-logo.png'; // Import the Kinderfield logo
import './Education.css'; // Import the CSS file

const Education = () => {
  return (
    <Container id="education" className="py-5 fade-in">
      <h2 className="text-center mb-4 skills-heading">My Education</h2>

      {/* Swiss German University */}
      <div className="bg-light rounded p-4 mb-4">
        <Row>
          <Col md={3} className="text-center mb-3">
            <Image
              src={sguLogo} // Use the imported SGU logo
              alt="Swiss German University Logo"
              className="education-logo"
              fluid
              rounded
            />
          </Col>
          <Col md={9}>
            <h3>Swiss German University</h3>
            <p className="text-muted">Bachelor's degree, Information Technology | Aug 2022 - Aug 2026</p>

            <p>
              <strong>My activities and societies:</strong>
              <ul>
                <li>Badminton Club - Secretary</li>
                <li>IT Student Association - Member</li>
                <li>Chess Club - Event Division</li>
              </ul>
            </p>

            <p>
              I am a highly motivated and organized individual with a passion for Information Technology. I joined the
              Badminton Club, IT Student Association, and Chess Club in the first year of my undergraduate studies. I am
              active in all activities that the clubs hold and have gained valuable experience in leadership, teamwork, and
              communication.
            </p>
          </Col>
        </Row>
      </div>

      {/* Kinderfield School */}
      <div className="bg-light rounded p-4">
        <Row>
          <Col md={3} className="text-center mb-3">
            <Image
              src={kinderfieldLogo} // Use the imported Kinderfield logo
              alt="Kinderfield School Logo"
              className="education-logo"
              fluid
              rounded
            />
          </Col>
          <Col md={9}>
            <h3>Kinderfield School</h3>
            <p className="text-muted">Junior and Senior Highschool</p>
            <p>Activities and societies: Basketball, Band, Vlog, Student Council</p>
            <ul>
              <li>
                <strong>Achievements and Engagements:</strong>
                <ul>
                  <li>
                    Achieved an IGCSE O level Examination, an internationally recognized qualification that demonstrates
                    academic proficiency and readiness for further education
                  </li>
                  <li>
                    Joined the school’s basketball team and band, where I developed teamwork, leadership, and communication
                    skills.
                  </li>
                  <li>
                    Won several Band and Vlog competitions, where I showcased my creativity, originality, and technical
                    skills in producing engaging and entertaining content
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Education;
