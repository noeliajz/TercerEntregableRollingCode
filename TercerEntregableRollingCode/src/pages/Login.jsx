import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Login = () => {
  const [formValue, setFormValue] = useState({
    user: "admin1",
    pass: "123",
  });
  const handleChange = (ev) => {
    setFormValue({ ...formValue, [ev.target.name]: ev.target.value });
  };

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.pass === formValue.pass) {
      user.role === "admin"
        ? (location.href = "/admin")
        : (location.href = "/user");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }
  };
  return (
    <>
      <body className="colorLogin  ">
        <Container>
          <Row>
            <Col>
              <Form className=" Login pb-4 text-center display-flex justify-content-center">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="user"
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="text"
                    name="pass"
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Button onClick={handleClick}>Iniciar Sesión</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </body>
    </>
  );
};

export default Login;
