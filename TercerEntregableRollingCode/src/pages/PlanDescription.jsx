import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PlanDescription = () => {
  

  return (
    <>
    <body className="PlanDescription">
    <h2 className="paddingTitle text-center">
        Conoce todos nuestros a planes!
      </h2>
      <Container fluid >
        <Row className=" py-3 justify-content-between">
          <Col className="d-flex" sm={3} lg={4}> 
            <Card>
              <Card.Header className='text-center fs-4' style={{color:'#D2DE32',background:'#206A5D'}}>Plan Primeros pasos</Card.Header>
              <Card.Body className="text-center">
                <Card.Img src="https://media.lmneuquen.com/p/7c3155642d13e2c356d31604a8b8c296/adjuntos/195/imagenes/002/377/0002377931/motivos-y-soluciones-las-mascotas-que-prefieren-callar.jpg" alt="Card image"  height={'300px'} width={'300px'}/>
                <Button variant="primary" className="mt-4" >Más info</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex" sm={3} lg={4}>
            <Card>
              <Card.Header className='text-center fs-4' style={{color:'#D2DE32',background:'#206A5D'}}>Plan Madurando</Card.Header>
              <Card.Body className="text-center">
              <Card.Img
                src="https://w0.peakpx.com/wallpaper/565/820/HD-wallpaper-beagle-lawn-puppy-green-grass-bokeh-pets-dogs-cute-animals-beagle-in-grass-beagle-dog.jpg"
                alt="Card image"
                height={"300px"}
                width={"300px"}
              />
                <Button variant="primary" className="mt-4"  >Más info</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex" sm={3} lg={4}>
            <Card>
              <Card.Header className='text-center fs-4' style={{color:'#D2DE32',background:'#206A5D'}}>Plan Adultos</Card.Header>
              <Card.Body className="text-center">
              <Card.Img
                src="https://e1.pxfuel.com/desktop-wallpaper/721/496/desktop-wallpaper-pets.jpg"
                alt="Card image"
                height={"300px"}
                width={"300px"}
              />
                <Button variant="primary" className="mt-4"  >Más info</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </body>
    
    </>
  );
};

export default PlanDescription;
