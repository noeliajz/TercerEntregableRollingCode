import React from 'react'

import {Routes, Route} from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import RecordPage from '../pages/RecordPage'
import UserPage from '../pages/userPage'




const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/adminPage' element={<AdminPage/>} />
        <Route path='/userpage' element={<UserPage/>} />
        <Route  path='/product/:id' element={<ProductPage/>}/>
        <Route  path='/record/:id' element={<RecordPage/>}/>
    </Routes>
  )
}

export default RoutesView