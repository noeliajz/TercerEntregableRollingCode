import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ShopingCart = () => {
  const [products, setProducts] = useState([])
  const getAllProducts = async () => {
    const res = await axios.get('http://localhost:8080/api/products')
    const  {getAllProd}= res.data
    setProducts(getAllProd)}
 
    useEffect(() => {
        getAllProducts()
    }, [])
   
    console.log(products)

  return (
    <>
      <h1 className='paddingHome'>Carrito</h1>
    </>
  )
}

export default ShopingCart
