import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 



const Footer = () => {
  return (
    <>
      
         <Container fluid className=' bg-dark text-center py-4 footer' >
            <Row className='justify-content-between py-3'>
                <Link to="/" alt="" >
                  <img src="./img/icono.jpeg" alt="" width="190px" height="190px"/>
                </Link>
            </Row>
            <Row className='justify-content-between '>
                <Col sm={3} lg={3}  >
                    <Link to="error404.html" >Información</Link>
                    <div className='py-3'>
                      <div className='py-2'>
                      <Link to="error404.html">Preguntas frecuentas</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html">Términos y condiciones</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html">Botón de arrepentimiento</Link>
                      </div>
                      <div className='py-2'>
                      <Link to="error404.html">Legales de promoción</Link>
                      </div>
                    </div>  
                </Col>
                <Col sm={3} lg={3} >
                  <Link to="error404.html" >¡Seguinos!</Link>  
                    <div className='py-3'>
                      <Link to="error404.html">@KingPet</Link>  
                    </div>
                </Col>
                <Col sm={3} lg={3} >
                    <Link to="error404.html">Contacto</Link>  
                </Col>
                <Col sm={3}  lg={3} >
                    <Link to="https://goo.gl/maps/KCtNriVoH4WxpcAEA">Ubicación</Link>
                </Col>
            </Row>
        </Container> 
         
    </>
  )
}

export default Footer
