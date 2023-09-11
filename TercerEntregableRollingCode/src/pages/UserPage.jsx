import React, { useEffect } from 'react'
import CardProduct from '../components/CardProduct'

const UserPage = ({ setUserAdmin }) => {
  useEffect(() => {
    setUserAdmin(true)
  }, [])
  return (
    <>
    <CardProduct/>
    </>
  )
}

export default UserPage