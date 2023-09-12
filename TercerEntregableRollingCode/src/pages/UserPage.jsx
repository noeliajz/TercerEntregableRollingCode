import React from 'react'
import CardProduct from '../components/CardProduct'
import CarrouselPublicity from '../components/CarrouselPublicity'

const UserPage = () => {
  return (
    <>
    <div className="conteiner">
      <div className="row">
      <CarrouselPublicity/>
    <CardProduct/>
      </div>
    </div>
   
    </>
  )
}

export default UserPage