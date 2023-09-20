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
import AllProducts from '../pages/AllProducts'
import Register2 from '../pages/Register2'
import Login from '../pages/Login'
import OneProduct from '../pages/OneProduct'
import SobreNosotros from '../pages/SobreNosotros'
import FirstPlan from '../pages/FirstPlan'
import SecondPlan from '../pages/SecondPlan'
import ThirdPlan from '../pages/thirdPlan'
import Datepicker from '../pages/Datepicker'
import EditProductPage from '../pages/EditProductPage'
import CreateProductPage from '../pages/CreateProductPage'
import CreateUserPage from '../pages/CreateUserPage'
import EditUserPage from '../pages/EditUserPage'

const RoutesView = ({setUserAdmin}) => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adminPage' element={<AdminPage/>} />
        <Route  path='/product/:id' element={<OneProduct/>}/>
        <Route  path='/record/:id' element={<RecordPage/>}/>
        <Route  path='/shopingCart' element={<ShopingCart/>}/>
        <Route  path='/planDesc' element={<PlanDescription/>}/>
        <Route  path='/turn' element={<Turn/>}/>
        <Route  path='/user' element={<UserPage setUserAdmin={setUserAdmin}/>}/>
        <Route  path='/allproducts' element={<AllProducts/>}/>
        <Route  path='/sobrenosotros' element={<SobreNosotros/>}/>
        <Route  path='/register' element={<Register2/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/firstplan' element={<FirstPlan/>}/>
        <Route  path='/secondplan' element={<SecondPlan/>}/>
        <Route  path='/thirdplan' element={<ThirdPlan/>}/>
        <Route  path='/datepicker' element={<Datepicker/>}/>
        <Route path='/editProduct/:id' element={<EditProductPage />} />
        <Route path='/createProd' element={<CreateProductPage />} />
        <Route path='/createUser' element={<CreateUserPage />} />
        <Route path='/editUser/:id' element={<EditUserPage />} />
    </Routes>
  )
}

export default RoutesView