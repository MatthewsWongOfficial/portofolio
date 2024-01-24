  import React from 'react';
  import { Container, Row, Col } from 'react-bootstrap';
  import './Skills.css'; // Import the CSS file

  const Skills = () => {
    return (
      <section id="skills" className="py-5">
        <Container>
          <h2 className="text-center mb-4 skills-heading">Tech Stack that I've Used</h2>
          <Row>
            {/* Design Process */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="border p-4 rounded fadeInLeft">
                <h4 className="mb-3">Design Process</h4>
                <ul className="list-unstyled">
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </Col>

            {/* Code Development */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="border p-4 rounded fadeIn">
                <h4 className="mb-3">Code Development</h4>
                <ul className="list-unstyled">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Jquery</li>
                  <li>PHP Laravel</li>
                  <li>React JS</li>
                  <li>Java</li>
                  <li>Tailwind CSS</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </Col>

            {/* Other Tech I Used */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="border p-4 rounded fadeInRight">
                <h4 className="mb-3">Other Tech I Used</h4>
                <ul className="list-unstyled">
                  <li>Firebase</li>
                  <li>Git</li>
                  <li>Wazuh</li>
                  <li>Digital Ocean</li>
                  <li>Elastic Search</li>
                  <li>Kibana</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  export default Skills;
