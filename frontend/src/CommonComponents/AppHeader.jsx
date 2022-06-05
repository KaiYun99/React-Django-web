/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Navbar, Container, Nav, Dropdown, NavDropdown,
} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Link } from 'react-router-dom';
import './app.css';

function AppHeader() {
  return (
    <Navbar expand="md" bg="primary" variant="dark">
      <Container>
        <>
          <Nav.Item className="left-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="#home">Hello World</Navbar.Brand>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Events</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button">
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
          </Nav.Item>
          <Nav.Item className="right-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#pricing">Sign Up</Nav.Link>
              <Nav.Link href="#pricing2">Sign In</Nav.Link>
            </Nav>
          </Nav.Item>
        </>
      </Container>
    </Navbar>
  );
}
export default AppHeader;
