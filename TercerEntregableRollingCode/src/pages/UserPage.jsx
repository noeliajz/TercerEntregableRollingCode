import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import CarrouselPublicity from '../components/CarrouselPublicity'
import PlanDescription from './PlanDescription'
/* noe */
import CardProductPrueba from '../components/CardProductPrueba'
import axios from 'axios'
/* fin */

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
/* fin  */

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
        
        {/* noe */}
{/*          <CardProduct />
 */}         {/*  */}
        </div>
      </div>

{/* noe */}
<>
     <h1>product page</h1>
    <h2>Adquiri todos nuestros productos</h2> 
    <div className="container">
        <div className="row">
            <CardProductPrueba array={products}/>
         </div>
    </div>
  </>

{/*  */}
    </>
  )
}

export default UserPage