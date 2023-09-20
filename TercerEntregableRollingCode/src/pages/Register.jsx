import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Axios from "axios"

const Register = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [repeatpass, setRepeatPass] = useState('')

  const [formInputs, setFormInputs] = useState({

    name:'',
    user:'',
    pass:'',
    repeatPass:''

  })

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

  const handleSubmit = async() => {
    const res = await fetch ('http://localhost:8080/api/users/register'), {
          method:'POST' ,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: formInputs.user
            contraseña: formInputs.pass
          })
    }
    const data = await res.json()
    

  }

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
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="user"
                  onChange={handleChange}
                  placeholder="Ingresa tu Nombre"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                  placeholder="Ingresa tu Apellido"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  onChange={handleChange}
                  placeholder="Ingresa tu direccion"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="user"
                  onChange={handleChange}
                  placeholder="Ingresa tu Usuario"
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
                  placeholder="Ingresa tu Contraseña"
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
                  placeholder="Repeti tu Contraseña"
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
