import React from 'react'

import {Routes, Route} from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import UserPage from '../pages/userPage'
import Home from '../pages/Home'



const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/userPage' element={<UserPage/>} />
        <Route path='/adminPage' element={<AdminPage/>} />
    </Routes>
  )
}

export default RoutesView