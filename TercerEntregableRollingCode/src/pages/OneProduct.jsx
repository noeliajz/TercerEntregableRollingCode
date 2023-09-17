import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getOneProduct = async () => {
    const res = await fetch(`http://localhost:8080/api/products/${params.id}`);
    const data = await res.json();
    const {getOneProd} = data
    console.log(getOneProd);
    setProduct(getOneProd);
  };
  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <>
      <div className="container paddingOneProduct text-center pb-5">
        <div className="row">
          <div className="col">
          <div key={product?._id}>
          <h4>{product?.nombre}</h4>
          <h4>{product?.precio}</h4>
          <h4>{product?.codigo}</h4>
        </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default OneProduct;
