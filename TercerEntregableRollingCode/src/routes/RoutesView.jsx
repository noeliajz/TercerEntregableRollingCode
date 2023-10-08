import React from 'react'
import AdminPage from '../pages/AdminPage'
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import RecordPage from '../pages/RecordPage'
import PlanDescription from '../pages/PlanDescription'
import ShopingCart from '../pages/ShopingCart'
import Turn from '../pages/Turn'
import UserPage from '../pages/UserPage'
import { Routes, Route } from 'react-router-dom'
import AllProducts from '../pages/AllProducts'
import Register from '../pages/Register'
import Login from '../pages/Login'
import OneProduct from '../pages/OneProduct'
import SobreNosotros from '../pages/SobreNosotros'
import FirstPlan from '../pages/FirstPlan'
import SecondPlan from '../pages/SecondPlan'
import ThirdPlan from '../pages/ThirdPlan'
import Datepicker from '../pages/Datepicker'
import EditProductPage from '../pages/EditProductPage'
import CreateProductPage from '../pages/CreateProductPage'
import CreateUserPage from '../pages/CreateUserPage'
import EditUserPage from '../pages/EditUserPage'
import ProductAdminPage from '../pages/ProductAdminPage'
import UserAdminPage from '../pages/UserAdminPage'
import DailyPage from '../pages/DailyPage'
import HistoryUserPage from '../pages/HistoryUserPage'
import Error404 from '../pages/Error404'
import PrivateRoute from '../components/PrivatesRoutes'

const RoutesView = ({ setUserAdmin }) => {
  return (
    <Routes>
      <Route path='/product/:id' element={<OneProduct />} />
      <Route path='/planDesc' element={<PlanDescription />} />
      <Route path='/allproducts' element={<AllProducts />} />
      <Route path='/sobrenosotros' element={<SobreNosotros />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/firstplan' element={<FirstPlan />} />
      <Route path='/secondplan' element={<SecondPlan />} />
      <Route path='/thirdplan' element={<ThirdPlan />} />
      <Route path='/*' element={<Error404 />} />

      <Route path='/shopingCart' element={
        <PrivateRoute role={'user'}>
          <ShopingCart />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/user' element={
        <PrivateRoute role={'user'}>
          <UserPage setUserAdmin={setUserAdmin} />
        </PrivateRoute>
      }>
      </Route>
      
      <Route path='/datepicker' element={
        <PrivateRoute role={'user'}>
          <Datepicker />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/' element={<Home />} />

      <Route path='/adminPage' element={
        <PrivateRoute role={'admin'}>
          <AdminPage />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/record/:id' element={
        <PrivateRoute role={'admin'}>
          <RecordPage />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/turn' element={
        <PrivateRoute role={'user'}>
          <Turn />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/editProduct/:id' element={
        <PrivateRoute role={'admin'}>
          <EditProductPage />
        </PrivateRoute>
      }>
      </Route>

      <Route path='/createProd' element={
        <PrivateRoute role={'admin'}>
          <CreateProductPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/createUser' element={
        <PrivateRoute role={'admin'}>
          <CreateUserPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/editUser/:id' element={
        <PrivateRoute role={'admin'}>
          <EditUserPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/ProductAdmin' element={
        <PrivateRoute role={'admin'}>
          <ProductAdminPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/UserAdmin' element={
        <PrivateRoute role={'admin'}>
          <UserAdminPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/DailyAdmin' element={
        <PrivateRoute role={'admin'}>
          <DailyPage />
        </PrivateRoute>
      }>
      </Route>


      <Route path='/HistoryUserPage/:id' element={
        <PrivateRoute role={'admin'}>
          <HistoryUserPage />
        </PrivateRoute>
      }>
      </Route>


    </Routes>
  )
}

export default RoutesView