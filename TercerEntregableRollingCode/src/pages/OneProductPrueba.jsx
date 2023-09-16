import React, { useEffect, useState } from 'react'
import CardProductPrueba from '../components/CardProductPrueba'
import { useParams } from 'react-router-dom';

const OneProductPrueba = () => {
  const params = useParams()
  const [product, setProduct] = useState({})
  

  const getOneProduct = async () => {
    const res = await fetch(`http://localhost:8080/api/product/${params.id}`)
    const {getOneProduct} = await res.json()
    console.log(getOneProduct)
    setProduct(getOneProduct)
 
    useEffect(() => {
    
        getOneProduct()
    }, [])
  }

return (
  <>
    <div key={product._id}>
    <h4>{product.nombre}</h4>
    <h4>{product.precio}</h4>
    <h4>{product.codigo}</h4>
    </div>
 
    </>
  )
}


export default OneProductPrueba