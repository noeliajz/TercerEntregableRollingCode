import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import logo from "../components/img/logo.png";

const Footer = () => {
  return (
    <>
         <Container fluid className=' footer text-center py-4 ' >
            <Row className='justify-content-between py-3'>
                <Link to="/" alt="">
                  <img src={logo} alt="" width="190px" height="190px"/>
                </Link>
            </Row>
            <Row className='justify-content-between '>
                <Col sm={3} lg={3}  >
                    <Link to="error404.html" className='fs-5 footer'>Información</Link>
                    <div className='py-3'>
                      <div className='py-2'>
                      <Link to="error404.html" className='fs-5 footer'>Preguntas frecuentas</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html" className='fs-5 footer'>Términos y condiciones</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html" className='fs-5 footer'>Botón de arrepentimiento</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html" className='fs-5 footer'>Legales de promoción</Link>
                      </div>
                    </div>  
                </Col>
                <Col sm={3} lg={3} >
                  <Link to="error404.html" className='fs-5 footer'>¡Seguinos!</Link>  
                    <div className='py-3'>
                      <Link to="error404.html" className='fs-5 footer'>@KingPet</Link>  
                    </div>
                </Col>
                <Col sm={3} lg={3} >
                    <Link to="error404.html" className='fs-5 footer'>Contacto</Link>  
                </Col>
                <Col sm={3}  lg={3} >
                    <Link to="https://goo.gl/maps/KCtNriVoH4WxpcAEA" className='fs-5 footer'>Ubicación</Link>
                </Col>
            </Row>
        </Container> 
    </>
  )
}

export default Footer
