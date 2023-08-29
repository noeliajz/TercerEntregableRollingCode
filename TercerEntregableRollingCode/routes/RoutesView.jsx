import React from 'react'
import userPage from '../pages/userPage'
import {Routes, Route} from 'react-router-dom'

const RoutesView = () => {
  return (
    <Routes>
        <Route path='/' element={<userPage/>} />

    </Routes>
  )
}

export default RoutesView