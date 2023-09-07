import React, { useEffect, useState } from 'react'
import { arrayProductos } from '../data/product'
import CardProduct from '../components/CardProduct'

const UserPage = () => {


  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const res = await fetch(arrayProductos)
    const {getAllProd} = await res.json()
    setProducts(getAllProd)
    
    useEffect(() => {
      getAllProducts()
    }, [])
    
  }
  return (
    <>
    <h1>PAGINA DEL USUARIO</h1>
    <div>
      <CardProduct/>
    </div>
    </>
  )
}

export default UserPage