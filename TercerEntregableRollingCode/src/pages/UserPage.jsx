import React, { useEffect } from 'react'
import CardProduct from '../components/CardProduct'
import CarrouselPublicity from '../components/CarrouselPublicity'
import PlanDescription from './PlanDescription'
import '../components/css/UserPage.css'
import CardProductPrueba from '../components/CardProductPrueba'
const UserPage = ({ setUserAdmin }) => {
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

          <div className="productosDestacados d-flex justify-content-center " style={{ margin: '50px' }}>
            <h1>PRODUCTOS DESTACADOS DEL MES</h1>
          </div>
          <div className="conteiner " >
            <CarrouselPublicity />
          </div>
        
         <CardProduct />
        </div>
      </div>


    </>
  )
}

export default UserPage