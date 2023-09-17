import React, { useEffect, useState } from 'react'



const ShopingCart = () => {
  const [cart, setCart] = useState([])
  const getCartUser = async () => {

  }

  useEffect(() => {
    getCartUser()
  }, [])
   
  return (
    <>
      <h1 className='paddingHome'>Carrito</h1>
    </>
  )
}

export default ShopingCart
