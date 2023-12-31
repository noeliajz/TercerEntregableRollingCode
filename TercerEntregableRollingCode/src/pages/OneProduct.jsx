import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../utils/axiosClient";

const OneProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getOneProduct = async () => {
    const res = await clienteAxios.get(`/products/${params.id}`)
    setProduct(res.data.getOneProd);
   
  };
  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <>
      <div className="  container text-center paddingOneProduct  pb-5">
        <div className="row justify-content-center ">
          <div className="col ">
            <div
              key={product._id}
              className="card  text-center "
              style={{ width: "18rem", marginTop: "25px" }}
            >
              <img
                src={product.img}
                className="card-img-top"
                alt={product.alt}
              />
              <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">Precio: ${product.precio}</p>
                
                <p className="card-text">Descripción: {product.descripcion}</p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => handleClick(articulo._id)}
                >
                  Agregar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
