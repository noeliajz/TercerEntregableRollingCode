import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [inputCheckName, setInputCheckName] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    descripcion: "",
    price: 0,
    code: "",
    cantidad: 0,
    imagen: {},
  });

  const handleChange = (ev) => {
    if (ev.target.name === "imagen") {
      setFormValues({ ...formValues, [ev.target.name]: ev.target.files[0] });
    } else {
      setFormValues({ ...formValues, [ev.target.name]: ev.target.value });
      if (formValues.name) {
        setInputCheckName(false);
      }
    }
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    console.log(formValues)
    const token = JSON.parse(localStorage.getItem("token"));
    if (
      formValues.name === "" &&
      formValues.price === "" &&
      formValues.code === "" &&
      formValues.descripcion === "" &&
      formValues.cantidad === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Formulario Vacio!",
      });
    } else if (formValues.name === "") {
      setInputCheckName(true);
    } else {
      console.log(formValues.imagen)

      const formData = new FormData();
      formData.append("image", formValues.imagen);
       const res = await fetch(`http://localhost:8080/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre: formValues.name,
          precio: formValues.price,
          codigo: formValues.code,
          descripcion: formValues.descripcion,
          cantidad: formValues.cantidad
        }),
      });
      const resCreateProd = await res.json();

      if (resCreateProd.status === 201) {
        Swal.fire("Producto creado correctamente!", "success");

        setFormValues({
          name: "",
          descripcion: "",
          price: 0,
          code: "",
          cantidad: 0,
        });

        setTimeout(() => {
          navigate("/adminPage");
        }, 1000);
      } 
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "50px" }}
      >
        <form className="w-25">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formValues.nombre}
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Descripcion
            </label>
            <input
              type="text"
              name="descripcion"
              value={formValues.descripcion}
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Precio
            </label>
            <input
              type="number"
              name="price"
              value={formValues.precio}
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Codigo
            </label>
            <input
              type="text"
              name="code"
              value={formValues.codigo}
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              cantidad
            </label>
            <input
              type="number"
              name="cantidad"
              value={formValues.cantidad}
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Imagen del producto
            </label>
            <input
              type="file"
              name="imagen"
              className={
                inputCheckName ? "form-control is-invalid" : "form-control"
              }
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Crear Producto
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProductPage;
