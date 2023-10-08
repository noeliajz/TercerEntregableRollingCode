import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import CarrouselPublicity from '../components/CarrouselPublicity'
import PlanDescription from './PlanDescription'
import axios from 'axios';
import CardsAllProducts from '../components/CardsAllProducts'
import clienteAxios from '../utils/axiosClient';



const UserPage = ({ setUserAdmin }) => {

const [products, setProducts] = useState([])

const getAllProducts = async () => {
  try {
    const res = await clienteAxios.get('/products')
    setProducts(res.data.getAllProd)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
/*   const  {getAllProd}= res.data
 */  
}

  useEffect(() => {
      getAllProducts()
  }, [])
 
  console.log(products)
  
  

  useEffect(() => {
    setUserAdmin(true)
  }, [])


  return (
    <>
      <div className="conteiner " >
        <div className="row">

          <div className="conteiner">
            <PlanDescription />
          </div>

          <div className=" text-center " >
            <h1>PRODUCTOS DESTACADOS DEL MES</h1>
          </div>
          <div className="conteiner " >
            <CarrouselPublicity />
          </div>
        
        

<h2 className='text-center'>Adquiri todos nuestros productos</h2> 
    <div className="container">
        <div className="row">
            <CardsAllProducts array={products}/>
         </div>
    </div>
        </div>
      </div>


  </>


  
  )
}

export default UserPage