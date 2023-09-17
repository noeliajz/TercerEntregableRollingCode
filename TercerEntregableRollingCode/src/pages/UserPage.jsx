import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import CarrouselPublicity from '../components/CarrouselPublicity'
import PlanDescription from './PlanDescription'

/* noe */
import axios from 'axios';
import CardsAllProducts from '../components/CardsAllProducts'
/*  */


const UserPage = ({ setUserAdmin }) => {
/* noe */

const [products, setProducts] = useState([])
const getAllProducts = async () => {
  const res = await axios.get('http://localhost:8080/api/products')
  const  {getAllProd}= res.data
  setProducts(getAllProd)}

  useEffect(() => {
      getAllProducts()
  }, [])
 
  console.log(products)
  /* ------ */
  

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

          <div className=" d-flex justify-content-center " style={{ margin: '50px' }}>
            <h1>PRODUCTOS DESTACADOS DEL MES</h1>
          </div>
          <div className="conteiner " >
            <CarrouselPublicity />
          </div>
        
        
{/*          <CardProduct />
 */}        

{/* noe */}
<h2 className='text-center'>Adquiri todos nuestros productos</h2> 
    <div className="container">
        <div className="row">
            <CardsAllProducts array={products}/>
         </div>
    </div>
        </div>
      </div>

{/* ------ */}
  </>


  
  )
}

export default UserPage