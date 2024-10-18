import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="home" smooth={true} duration={500}>
            <i className="fas fa-home"></i> Home
          </Nav.Link>
          <Nav.Link as={Link} to="skills" smooth={true} duration={500}>
            <i className="fas fa-cogs"></i> Skills
          </Nav.Link>
          <Nav.Link as={Link} to="experience" smooth={true} duration={500}>
            <i className="fas fa-briefcase"></i> Experience 
          </Nav.Link>
          <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
            <i className="fas fa-folder-open"></i> Projects
          </Nav.Link>
          <Nav.Link as={Link} to="contacts" smooth={true} duration={500}>
            <i className="fas fa-envelope"></i> Contacts
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <span className="email">
  <i className="fas fa-envelope email-icon"></i>
  <a href="mailto:pavelpolosin@gmail.com">pavelpolosin@gmail.com</a>
</span>
    </Navbar>
  );
};

export default Header;
