import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, redirect } from 'react-router-dom';
import './css/NavbarComponents.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavbarComponents = ({ userAdmin, setUserAdmin }) => {
  const logoutUserFunction = () => {
    setUserAdmin(false)
    location.href='/'
  }
  return (
    <Navbar expand="lg" fixed="top" className="navbar styleColorNavbar"  >
    <Container>
      <Navbar.Brand href="/" style={{color:' rgb(129, 178, 20)'}} >
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
        <Nav className="me-auto ">
          <NavLink to="/" className=' fs-5 styleNavbar px-1 ' >Inicio</NavLink>
          <NavLink to="/nosotros " className='  fs-5 styleNavbar px-1'>Sobre nosotros</NavLink>
          <NavLink to="/planDesc " className=' fs-5 styleNavbar px-1'>Nuestros planes</NavLink>
          <NavLink to="/turn " className='  fs-5 styleNavbar px-1'>Solicitar turnos</NavLink> 
        </Nav>
      </Navbar.Collapse>
      <Nav className="ms-auto">
        {
          !userAdmin ?
          <>
            <NavLink to="/register " className=' fs-5 styleNavbar px-1'>Registrarse</NavLink>
            <NavLink to="/login " className=' fs-5 styleNavbar px-1'>Iniciar sesión</NavLink>
          </>
          :
          <>
          <NavLink to="/shopingCart " className=' fs-5 styleNavbar px-1'>Carrito</NavLink>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          <NavLink to="/login" className=' fs-5 styleNavbar px-1' onClick={() => logoutUserFunction()}>Cerrar sesión</NavLink>

          </>
          
        }
          
          </Nav>
    </Container>
  </Navbar>
      
    
  )
}

export default NavbarComponents
