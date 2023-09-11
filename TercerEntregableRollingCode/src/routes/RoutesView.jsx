import React from 'react'
import AdminPage from '../pages/AdminPage'
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import RecordPage from '../pages/RecordPage'
import PlanDescription from '../pages/PlanDescription'
import ShopingCart from '../pages/ShopingCart'
import Turn from '../pages/Turn'
import UserPage from '../pages/UserPage'
import {Routes, Route} from 'react-router-dom'

const RoutesView = ({setUserAdmin}) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adminPage' element={<AdminPage/>} />
        <Route  path='/product/:id' element={<ProductPage/>}/>
        <Route  path='/record/:id' element={<RecordPage/>}/>
        <Route  path='/shopingCart' element={<ShopingCart/>}/>
        <Route  path='/planDesc' element={<PlanDescription/>}/>
        <Route  path='/turn' element={<Turn/>}/>
        <Route  path='/user' element={<UserPage setUserAdmin={setUserAdmin}/>}/>
        
    </Routes>
  )
}

export default RoutesView