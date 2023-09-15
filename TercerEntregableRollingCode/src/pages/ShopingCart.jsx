import React, { useState } from 'react'

const ShopingCart = () => {
  const [products, setProducts] = useState([])
  const getAllProducts = async () => {
    const res = await axios.get('http://localhost:8080/api/products')
    const  {getAllProd}= res.data
    setProducts(getAllProd)}
 
    useEffect(() => {
    
        getAllProducts()
    }, [])
  return (
    <>
      <h1>Carrito</h1>
    </>
  )
}

export default ShopingCart
