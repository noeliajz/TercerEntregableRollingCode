import React, { useEffect, useState } from "react";

const Form = () => {
  /* const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState(""); */
  /* const [name, setName] = useState('')
const [lastname, setLastname] = useState('')
const [addess, setAddress] = useState('') */

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

  /* useEffect(() => {
    console.log(formInputs)
}, [formInputs])
 */

  const handleSubmit = async () => {
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
      console.log(res.json());
      prompt("pruea")

      /*         const data= await res.json()
       */ console.log(data);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
          <h2 className="form_tittle">Crea una Cuenta</h2>

          <div className="form_container">
            <div className=" mb-3">
              <label htmlFor="exempleInputEmail1" className="form-label">
                Nombre
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
                Apellido
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
                Usuario
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
                Contraseña
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
                Dirección
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