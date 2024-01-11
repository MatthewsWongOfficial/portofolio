import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const navLinkStyle = {
    fontFamily: 'Roboto-Bold',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="sticky-header" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="landing-page" smooth duration={500} style={{ ...navLinkStyle, marginBottom: '-2mm' }} offset={-50}>
          Matthews Wong
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="education" smooth duration={500} style={navLinkStyle} offset={-28} onClick={handleNavItemClick}>
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth duration={500} style={navLinkStyle} offset={-37} onClick={handleNavItemClick}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="certifications" smooth duration={500} style={navLinkStyle} offset={-22} onClick={handleNavItemClick}>
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
