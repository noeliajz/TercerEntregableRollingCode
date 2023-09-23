import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, redirect } from 'react-router-dom';
import './css/NavbarComponents.css'
import logo from "../components/img/logo.png";


const NavbarComponents = ({ userAdmin, setUserAdmin }) => {
 
 const token = JSON.parse(localStorage.getItem('token')) || ''

const role = JSON.parse(localStorage.getItem('role')) || ''
 

  const logoutUserFunction = () => {
    localStorage.removeItem('idUser')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setUserAdmin(false)
    location.href='/'
  }
  return (
    <Navbar expand="lg" fixed="top" className="navbar styleColorNavbar"  >
    <Container>
      <Navbar.Brand to='/' style={{color:' rgb(129, 178, 20)'}} >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            KING PET
          </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <NavLink to={role === 'admin' ? '/adminPage' : role === 'user' ? '/user' : '/'} className=' fs-5 styleNavbar px-1 ' >Inicio</NavLink>

           {
            token && role === 'admin'
            ?
            (
              <>
                <NavLink to="/planDesc " className=' fs-5 styleNavbar px-1'>Nuestros planes</NavLink>
              </>
            )
            :
            <>
             <NavLink to="/sobrenosotros " className='  fs-5 styleNavbar px-1'>Sobre nosotros</NavLink>
             <NavLink to="/planDesc " className=' fs-5 styleNavbar px-1'>Nuestros planes</NavLink>
             <NavLink to="/turn " className='  fs-5 styleNavbar px-1'>Solicitar turnos</NavLink> 

            </>
           }
          {
            token && role === 'admin' || token && role === 'user'
            ?
            <>
            <NavLink to="/login" className=' fs-5 styleNavbar px-1' onClick={() => logoutUserFunction()}>Cerrar sesión</NavLink>
            </>
            :
            <>
            <NavLink to="/register " className=' fs-5 styleNavbar px-1'>Registrarse</NavLink>
            <NavLink to="/login " className=' fs-5 styleNavbar px-1'>Iniciar sesión</NavLink>
            </>
          }
         

        </Nav>
        
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
      
    
  )
}

export default NavbarComponents