import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const ShopingCart = () => {
  const [cart, setCart] = useState([]);
  const [cantidadState, setCantidadState] = useState({});
  let suma = 0;

  const getCartUser = async () => {
    const idUser = JSON.parse(localStorage.getItem("idUser"));

    const resCart = await fetch(`http://localhost:8080/api/users/${idUser}`);
    const dataCart = await resCart.json();

    const idCart = dataCart.getUser.idCart;
    const resProd = await fetch(`http://localhost:8080/api/cart/${idCart}`);
    const dataProd = await resProd.json();
    console.log(dataProd)
    const valoresIniciales = {};
    dataProd?.getCart?.products.forEach((producto) => {
      valoresIniciales[producto._id] = 0;
      setCantidadState(valoresIniciales);
    });
    setCart(dataProd.getCart.products)
  };

  const handleChange = (ev, idProd) => {
    const { value } = ev.target;
    setCantidadState({ ...cantidadState, [idProd]: parseInt(value) });
  };

  const getResult = (precio, cantidad) => {
    const res = cantidad * precio;
    if (isNaN(res)) {
      return 0;
    } else {
      suma += res;
      return res;
    }
  };

  const handleClickMP = async () => {
    const res = await fetch("http://localhost:8080/api/pay", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    location.href = `${data.res.init_point}`;
  };

  useEffect(() => {
    getCartUser();
  }, []);

  useEffect(() => {
    getResult();
  }, [cantidadState]);

  return (
    <>
      <section className="colorCart">
        <h1 className="paddingHome text-center">Mi Carrito</h1>
        <Table striped bordered hover responsive className="p-5">
          <thead>
            <tr>
              <th scope="col">ID Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => (
              <tr key={producto._id}>
                <th scope="row">{producto._id}</th>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-25"
                    onChange={(ev) => handleChange(ev, producto._id)}
                  />
                </td>
                <td>
                  {getResult(producto.precio, cantidadState[producto._id])}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-center py-5">
          <h3>{suma}</h3>
        </div>
        <div className="text-center py-5">
          <button className="btn btn-primary" onClick={handleClickMP}>
            Pagar
          </button>
        </div>
      </section>
    </>
  );
};

export default ShopingCart;
