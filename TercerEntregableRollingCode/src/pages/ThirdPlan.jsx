import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ThirdPlan = () => {
    return (
        <>
          <body className="FirstPlan">
            <h2 className="paddingTitle text-center fs-1">Plan Adultos</h2>
            <Container fluid>
              <Row className=" py-3 justify-content-between fs-5">
                <Col className="d-flex " sm={12} lg={4} md={5}>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Img
                        src="https://e1.pxfuel.com/desktop-wallpaper/721/496/desktop-wallpaper-pets.jpg"
                        alt="Card image"
                        height={"300px"}
                        width={"300px"}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <div className="p-4">
                    <BsFillCheckCircleFill style={{ color: "#81B214" }} /> Servicios
                    para mascotas de más de 10 años.
                  </div>
                  <div className="p-4">
                    <BsFillCheckCircleFill style={{ color: "#81B214" }} /> Consultas
                    médicas al 100% en todas las especialidades sin derivación
                    previa.
                  </div>
                  <div className="p-4">
                    <BsFillCheckCircleFill style={{ color: "#81B214" }} />{" "}
                    Emergencias médicas las 24 horas
                  </div>
                </Col>
              </Row>
            </Container>
          </body>
        </>
      );
}

export default ThirdPlan
