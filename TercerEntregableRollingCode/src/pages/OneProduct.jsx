import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getOneProduct = async () => {
    const res = await fetch(`http://localhost:8080/api/products/${params.id}`);
    const data = await res.json();
    const { getOneProd } = data;
    console.log(getOneProd);
    setProduct(getOneProd);
  };
  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <>
      <div className="container paddingOneProduct  pb-5">
        <div className="row ">
          <div className="col ">
            {/* <div key={product?._id}>
          <h4>{product?.nombre}</h4>
          <h4>{product?.precio}</h4>
          <h4>{product?.codigo}</h4> */}

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
                <p className="card-text">
                  Código de producto: {product.codigo}
                </p>
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
