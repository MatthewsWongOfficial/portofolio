import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import awsCertification from '../assets/certifications/aws-certification.jpg';
import collegeAlgebraCertification from '../assets/certifications/collegealgebra-certification.JPG';
import frontendCertification from '../assets/certifications/frontend-certification.JPG';
import generativeAICertification from '../assets/certifications/generativeai-certification.jpeg';
import itLeadershipCertification from '../assets/certifications/itleadership-certification.jpeg';
import lambdaTestCertification from '../assets/certifications/lamdatest-certification.jpeg';
import ndeCertification from '../assets/certifications/nde-certification.jpg';
import softwareDevelopmentCertification from '../assets/certifications/softwaredevelopment-certification.jpeg';
import './Certifications.css'; // Create a new CSS file for Certifications styling

const CertificationData = [
  { name: 'AWS Academy Cloud Foundations', image: awsCertification },
  { name: 'College Algebra with Python', image: collegeAlgebraCertification },
  { name: 'Legacy Frontend Certification', image: frontendCertification },
  { name: 'Network Defense Essentials', image: ndeCertification },
  { name: 'IT Leadership Certification', image: itLeadershipCertification },
  { name: 'LambdaTest Software Testing', image: lambdaTestCertification },
 
  { name: 'Generative AI Certification', image: generativeAICertification },
  { name: 'Software Development Certification', image: softwareDevelopmentCertification },
];

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertification(null);
  };

  return (
    <section id="certifications" className="py-5">
      <Container>
      <h2 className="text-center mb-4 skills-heading">Certifications</h2>
        <Row>
          {CertificationData.map((certification, index) => (
            <Col key={index} xs={12} md={6} lg={3} className="mb-4">
              <div
                className="certification-item"
                onClick={() => handleCertificationClick(certification)}
              >
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="img-fluid rounded"
                />
                <p className="certification-name">{certification.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for displaying full-size certificate image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCertification?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedCertification?.image}
            alt={selectedCertification?.name}
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Certifications;
