import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, redirect } from 'react-router-dom';
import './css/NavbarComponents.css'
import logo from "../components/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavbarComponents = ({ userAdmin, setUserAdmin }) => {
 /* lo agregue martes */
 const token = JSON.parse(localStorage.getItem('token')) || ''
/*  console.log(token)
 */ 
const role = JSON.parse(localStorage.getItem('role')) || ''
 /* console.log(role)
 
 / / ... */

  const logoutUserFunction = () => {
    setUserAdmin(false)
    location.href='/'
  }
  return (
    <Navbar expand="lg" fixed="top" className="navbar styleColorNavbar"  >
    <Container>
      <Navbar.Brand to={role === 'admin' ? '/adminPage' : role === 'user' ? '/user' : '/'} style={{color:' rgb(129, 178, 20)'}} >
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
       {/* esto cambie MARTES */}   <NavLink to={role === 'admin' ? '/adminPage' : role === 'user' ? '/user' : '/'} className=' fs-5 styleNavbar px-1 ' >Inicio</NavLink>


       {/* esto agregue MARTES para que no me los muestre cuando este logueado: */}
           {
            token && role === 'admin'
            ?
            (
              <>
              <NavLink to="/sobrenosotros " className='  fs-5 styleNavbar px-1'>Crear usuarios</NavLink>
              <NavLink to="/planDesc " className=' fs-5 styleNavbar px-1'>Crear productos</NavLink>
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
             <NavLink to="/shopingCart " className=' fs-5 styleNavbar px-1'>Carrito</NavLink>
            <NavLink to="/login" className=' fs-5 styleNavbar px-1' onClick={() => logoutUserFunction()}>Cerrar sesión</NavLink>
            </>
            :
            <>
            <NavLink to="/register " className=' fs-5 styleNavbar px-1'>Registrarse</NavLink>
            <NavLink to="/login " className=' fs-5 styleNavbar px-1'>Iniciar sesión</NavLink>
            </>
          }
         

       {/* ................................... */}   
        </Nav>
        
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
      
    
  )
}

export default NavbarComponents