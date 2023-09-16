import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Register = () => {
  const [formValue, setFormValue] = useState({
    user: "",
    pass: "",
    repeatPass: "",
    role: "user",
    login: "false",
    delete: "false",
  });

  const handleChange = (ev) => {
    setFormValue({ ...formValue, [ev.target.name]: ev.target.value });
  };

  const handleClick = () => {
    if (formValue.pass === formValue.repeatPass) {
      localStorage.setItem("user", JSON.stringify(formValue));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }
  };

  return (
    <body className="colorBodyRegister">
      <Container>
        <Row>
          <Col>
            <Form className="PaddingRegister text-center">
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

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  name="repeatPass"
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Button onClick={handleClick}>Registrar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </body>
  );
};

export default Register;
