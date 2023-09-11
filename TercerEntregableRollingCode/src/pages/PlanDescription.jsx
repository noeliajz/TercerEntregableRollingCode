import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const PlanDescription = () => {
  const estiloTextoCard = {
    color:'red'
  }

  return (
    <>
      <h2 className='paddingTitle text-center'>Conoce todos nuestros a planes</h2>
     <Container fluid className='color' >
      <Row className=' py-3 justify-content-between'>
        <Col className='d-flex' sm={3} lg={4} >
            <Card className=" m-4">
              <Card.Img src="https://media.lmneuquen.com/p/7c3155642d13e2c356d31604a8b8c296/adjuntos/195/imagenes/002/377/0002377931/motivos-y-soluciones-las-mascotas-que-prefieren-callar.jpg" alt="Card image"  height={'300px'} width={'300px'}/>
              <Card.ImgOverlay>
                <Card.Title className='text-center fs-4' style={{color:'#D2DE32'}}>"Plan: Primeros pasos"</Card.Title>
                <Card.Text style={estiloTextoCard}>
                Es un servicio para mascotas de 0 a 5 años. 
                </Card.Text>
                <Card.Text style={estiloTextoCard}>Incluye: guardia 24 hs y 20% de descuento en alimentos</Card.Text>
                <Card.Text style={estiloTextoCard}>No incluye internación</Card.Text>
              </Card.ImgOverlay>
            </Card>
        </Col>
        <Col className='d-flex' sm={3} lg={4} >
            <Card className=" m-4">
              <Card.Img src="https://w0.peakpx.com/wallpaper/565/820/HD-wallpaper-beagle-lawn-puppy-green-grass-bokeh-pets-dogs-cute-animals-beagle-in-grass-beagle-dog.jpg" alt="Card image" height={'300px'} width={'300px'} />
              <Card.ImgOverlay>
                <Card.Title className='text-center fs-4' style={{color:'#D2DE32'}}>"Plan: Madurando"</Card.Title>
                <Card.Text  style={estiloTextoCard}>
                Es un servicio para mascotas de 5 a 10 años. 
                </Card.Text>
                <Card.Text style={estiloTextoCard}>Incluye: guardia 24 hs y 25% de descuento en alimentos</Card.Text>
                <Card.Text style={estiloTextoCard}>No incluye internación</Card.Text>
              </Card.ImgOverlay>
            </Card>
        </Col>
        <Col className='d-flex' sm={3} lg={4} >
          <Card className=" m-4">
            <Card.Img src="https://e1.pxfuel.com/desktop-wallpaper/721/496/desktop-wallpaper-pets.jpg" alt="Card image" height={'300px'} width={'300px'}/>
            <Card.ImgOverlay>
              <Card.Title className='text-center fs-4' style={{color:'#D2DE32'}}>"Plan: Adultos"</Card.Title>
              <Card.Text style={estiloTextoCard}>
              Es un servicio para mascotas de más de 10 años.. 
              </Card.Text>
              <Card.Text style={estiloTextoCard}>Incluye: guardia 24 hs y 20% de descuento en alimentos</Card.Text>
              <Card.Text style={estiloTextoCard}>No incluye internación</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>        
      </Row>

     </Container>
    </>
  )
}

export default PlanDescription
