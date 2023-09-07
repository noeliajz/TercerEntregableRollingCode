import React from 'react'

import {Routes, Route} from 'react-router-dom'
import AdminPage from '../pages/AdminPage'

import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import UserPage from '../pages/userPage'



const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/userPage' element={<UserPage/>} />
        <Route path='/adminPage' element={<AdminPage/>} />
        <Route  path='/product/:id' element={<ProductPage/>} />
    </Routes>
  )
}

export default RoutesView