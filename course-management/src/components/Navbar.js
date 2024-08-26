import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Course Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/courses">
            <Nav.Link>Courses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/instances">
            <Nav.Link>Course Instances</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create-course">
            <Nav.Link>Create Course</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create-instance">
            <Nav.Link>Create Instance</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;