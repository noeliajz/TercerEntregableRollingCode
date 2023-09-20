import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Axios from "axios";

const Login = () => {
  const navigate = useNavigate
  const [formValue, setFormValue] = useState({
    user: " ",
    pass: " ",
  });

  const handleChange = (ev) => {
    setFormValue({ ...formValue, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.pass === formValue.pass) {
      user.role === "admin"
        ? (location.href = "/admin")
        : (location.href = "/user");

        const res = await fetch ('http://localhost:8080/api/users/login', {
          method: 'POST' ,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: formInputs.user,
            contrasenia: formInputs.pass
          })
        })

        const data = await res.json ()
        if(data.userUpdate.role=== 'admin') {
          localStorage.setItem('token',data.userUpdate.token )
          localStorage.setItem('role',data.userUpdate.role )
        
          navigate ('/admin')}
        else if (data.userUpdate.role=== 'user'){
          localStorage.setItem('token',data.userUpdate.token )
          localStorage.setItem('role',data.userUpdate.role )

          navigate ('/user')
        }

        


    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña incorrecta",
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
                    placeholder="Ingresar Usuario"
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
                    placeholder="Ingresar Contraseña"
                  />
                </Form.Group>
                <Button onClick={handleClick} className="ButtonLogin ">
                  Iniciar Sesión
                </Button>
                <Button onClick={handleClick} className="ButtonLogin ">
                  Iniciar con Facebook
                </Button>
                <Button onClick={handleClick} className="ButtonLogin ">
                  Iniciar con Gmail
                </Button>
                <Button onClick={handleClick} className="ButtonLogin ">
                  Recuperar Contraseña
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </body>
    </>
  );
};

export default Login;
