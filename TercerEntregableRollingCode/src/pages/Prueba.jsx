import React, { useEffect, useState } from 'react'
import CardProductPrueba from '../components/CardProductPrueba'
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
     <h1>product page</h1>
    <h2>ProductoSsaa</h2> 
    <div className="container">
        <div className="row">
            <CardProductPrueba array={products}/>
         </div>
    </div>
  </>
)
}
    


export default Prueba
