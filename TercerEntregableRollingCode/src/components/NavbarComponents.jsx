import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './css/NavbarComponents.css';


const NavbarComponents = ({ userAdmin, setUserAdmin }) => {
  const logoutUserFunction = () => {
    setUserAdmin(false)
    location.href='/'
  }
  return (
    <Navbar expand="lg" fixed="top" className="navbar"  >
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
          <NavLink to="#home" className='text-white letra' >Inicio</NavLink>
          <NavLink to="#link">Sobre nosotros</NavLink>
          <NavLink to="/planDesc">Nuestros planes</NavLink>
          <NavLink to="/turn">Turnos1</NavLink> 
        </Nav>
      </Navbar.Collapse>
      <Nav className="ms-auto">
        {
          !userAdmin ?
          <>
            <NavLink to="/register">Registrarse</NavLink>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </>
          :
          <NavLink to="/login" onClick={() => logoutUserFunction()}>Cerrar sesión</NavLink>
        
        }
          
          </Nav>
    </Container>
  </Navbar>
      
    
  )
}

export default NavbarComponents
