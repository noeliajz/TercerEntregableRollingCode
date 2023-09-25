import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'


const Form = () => {
 
  const [formInputs, setFormInputs] = useState({
    user: "",
    pass: "",
    repeatPass: "",
    name: "",
    lastname: "",
    address: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formInputs.pass === formInputs.repeatPass) {
     
      const res = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formInputs.name,
          apellido: formInputs.lastname,
          direccion: formInputs.address,
          usuario: formInputs.user,
          contrasenia: formInputs.pass
        }),
      
      });
      const data= await res.json()
      console.log(data)
      if(data.status === 201)
      {
        alert("registro exitoso")
          
        setTimeout(() => {location.href='/login'}, 3000)
      }}}
  return (
    <>
      <div className="d-flex py-5 justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
          <h2 className="form_tittle">Crea una Cuenta</h2>

          <div className="form_container">
            <div className=" mb-3">
              <label htmlFor="exempleInputEmail1" className="form-label">
                Ingresar nombres
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="form-control"
                id="exemplename"
                placeholder=" "
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="exempleInputEmail2" className="form-label">
                Ingresar apellidos
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                className="form-control"
                id="exemplelastname"
                placeholder=" "
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="exempleInputEmail3" className="form-label">
               Ingresar usuario
              </label>
              <input
                type="text"
                name="user"
                onChange={handleChange}
                className="form-control"
                id="exempleuser"
                placeholder=" "
              />
            </div>
            <div className=" mb-3">
              <label className="form_label" htmlFor="floatingInput4">
                Ingresar contraseña
              </label>
              <input
                type="password"
                name="pass"
                onChange={handleChange}
                className="form-control"
                id="exemplepass"
                placeholder=" "
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="floatingPassword5" className="form_label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                name="repeatPass"
                onChange={handleChange}
                className="form-control"
                id="exempleRepeatPass"
                placeholder=" "
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="floatingPassword6" className="form_label">
                Ingresar dirección
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                className="form-control"
                id="idAdress"
                placeholder=" "
              />
            </div>
            <button type="submit " className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
