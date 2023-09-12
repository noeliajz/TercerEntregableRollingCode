import React, { useEffect, useState } from 'react'
import TabDailyDoc1 from '../components/TabDailyDoc1'

const Home = () => {

 {/* noe */}
 const getAllProducts = async() => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  setProd(data.results)
}

 useEffect(() => {
  getAllProducts()
 }, [])

  {/* --- fin */}



  return (
    <>
    <h1>HOME</h1>
   
    
    </>
  )
}

export default Home