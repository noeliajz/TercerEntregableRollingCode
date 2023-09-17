import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardsAllProducts from '../components/CardsAllProducts';

const AllProducts = () => {
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
    <body className='AllProducts'>
    <h2 className='text-center '>Adquiri todos nuestros productos</h2> 
    <div className='container'>
        <div className="row py-4">
            <CardsAllProducts array={products}/>
         </div>
    </div>
    </body>
  </>
)
}
    


export default AllProducts
