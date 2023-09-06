import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { arrayProductos } from '../data/product'

const ProductPage = () => {

  const [product, setProduct] = useState({})

  const getOneProduct = () => {
    const { getOneProd } = res.json(arrayProductos)
    
    setProduct(getOneProd)
    useEffect(() => {
        getOneProduct()
      }, [])
  }
  return (
    <>
    <h1>product page</h1>
    
      <h2>Producto</h2>
      <hr />
      <div key={product._id}>
        <h4>{product.nombre}</h4>
        <h4>{product.precio}</h4>
        <h4>{product.codigo}</h4>
      </div>
   
    </>
  )
}

export default ProductPage