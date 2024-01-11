// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css'; // Import the CSS file for your styles

const Header = () => {
  const navLinkStyle = {
    fontFamily: 'Roboto-Bold', // Set the font-family to Roboto-Bold
    // Add any other styling you want for the navigation links
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="sticky-header">
      <Container>
        <Navbar.Brand as={Link} to="landing-page" smooth duration={500} style={navLinkStyle}>
          Matthews Wong
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="education" smooth duration={500} style={navLinkStyle}>
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth duration={500} style={navLinkStyle}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="certifications" smooth duration={500} style={navLinkStyle}>
              Certifications
            </Nav.Link>
            {/* Add more Nav.Link for other sections if needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
