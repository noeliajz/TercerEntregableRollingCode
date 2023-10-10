import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import clienteAxios, { config } from "../utils/axiosClient";

const Login = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    user: "",
    pass: "",
  });

  const [userInput, setUserInput] = useState(false);
  const [passInput, setPassInput] = useState(false);

  const handleChange = (ev) => {
    setFormInputs({ ...formInputs, [ev.target.name]: ev.target.value });

    if (formInputs.user) {
      setUserInput(false);
    } else if (formInputs.pass) {
      setPassInput(false);
    }
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    if (formInputs.user) {
      if (formInputs.pass) {
        setUserInput(false);
        setPassInput(false);

        const res = await clienteAxios.post('/users/login', {
          usuario: formInputs.user,
          contrasenia: formInputs.pass,
        }, config)
      

      
        if (res.data.userUpdate.role === "admin") {
          localStorage.setItem("token", JSON.stringify(res.data.userUpdate.token))
          localStorage.setItem("role", JSON.stringify(res.data.userUpdate.role))
          localStorage.setItem("idUser", JSON.stringify(res.data.userUpdate._id))
          localStorage.setItem(  "nombre", JSON.stringify(res.data.userUpdate.nombre)
          )
          navigate('/adminPage')
          
        
        } else if (res.data.userUpdate.role === "user") {
          localStorage.setItem("token", JSON.stringify(res.data.userUpdate.token))
          localStorage.setItem("role", JSON.stringify(res.data.userUpdate.role))
          localStorage.setItem("idUser", JSON.stringify(res.data.userUpdate._id))
          navigate('/user')
       
          
      }
      }
    } else {
      setUserInput(true);
      setPassInput(true);
    }
  };

  useEffect(() => {
    console.log(formInputs);
  }, [formInputs]);

  return (
    <>
      <h2 className="py-3 text-center">Iniciar sesion</h2>
      <div className="d-flex justify-content-center">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Usuario
            </label>
            <input
              type="text"
              name="user"
              class={userInput ? "form-control is-invalid" : "form-control"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="pass"
              class={passInput ? "form-control is-invalid" : "form-control"}
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary my-3"
            onClick={handleClick}
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
