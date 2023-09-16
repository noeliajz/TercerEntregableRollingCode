import React, { useEffect, useState } from 'react'
import CardProductPrueba from '../components/CardsProducts'
import axios from 'axios';

const Prueba = () => {
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
    <h2 className='text-center'>Adquiri todos nuestros productos</h2> 
    <div className="container">
        <div className="row">
            <CardProductPrueba array={products}/>
         </div>
    </div>
  </>
)
}
    


export default Prueba
