import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const PlanDescription = () => {
  return (
    <>
      <h2 className='py-5 '>Conoce todos nuestros a planes</h2>
     <Container className='prueba' >
      <Row className='d-flex py-3 justify-content-center'>
        <Col className='d-flex' sm={12} md={6} lg={12}>
            <Card className="bg-dark text-white m-4  " >
            <Card.Img src="https://www.foyel.com/archivos/8/0/1971_cachorros_jugando_2_web.jpg" alt="Card image"  />
            <Card.ImgOverlay>
              <Card.Title>"Plan: Primeros pasos"</Card.Title>
              <Card.Text>
              Es un servicio para mascotas de 0 a 5 años. 
              </Card.Text>
              <Card.Text>Incluye: guardia 24 hs y 20% de descuento en alimentos</Card.Text>
              <Card.Text>No incluye internación</Card.Text>
            </Card.ImgOverlay>
          </Card>
          
          <Card className="bg-dark text-white m-4">
            <Card.Img src="https://ojo.pe/resizer/pPxA2I5bpLp4P4i5aSzT8HumGGI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/I2QQGNC745EGDF3WYJI6ASWJDY.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>"Plan: Madurando"</Card.Title>
              <Card.Text>
              Es un servicio para mascotas de 5 a 10 años. 
              </Card.Text>
              <Card.Text>Incluye: guardia 24 hs y 25% de descuento en alimentos</Card.Text>
              <Card.Text>No incluye internación</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white m-4">
            <Card.Img src="https://i1.wp.com/tuplanetavital.org/wp-content/uploads/2015/10/5perros-ancianos-fotos.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>"Plan: Adultos"</Card.Title>
              <Card.Text>
              Es un servicio para mascotas de más de 10 años.. 
              </Card.Text>
              <Card.Text>Incluye: guardia 24 hs y 20% de descuento en alimentos</Card.Text>
              <Card.Text>No incluye internación</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    
     </Container>
    </>
  )
}

export default PlanDescription
