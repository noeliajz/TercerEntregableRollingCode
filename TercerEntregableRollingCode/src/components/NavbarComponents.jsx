import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const NavbarComponents = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="./img/icono.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            KING PET
          </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Sobre nosotros</Nav.Link>
          <Nav.Link href="/planDesc">Nuestros planes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ms-auto">
          <Nav.Link href="/register">Registrarse</Nav.Link>
          <Nav.Link href="/login">Iniciar sesión</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
      
    
  )
}

export default NavbarComponents
