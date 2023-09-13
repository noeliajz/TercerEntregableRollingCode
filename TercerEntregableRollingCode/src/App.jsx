import React, { useState } from 'react'
import NavbarComponents from './components/NavbarComponents'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import RoutesView from './routes/RoutesView'
import Home from './pages/Home'
import Carrusel from './components/css/Carrusel'
import Profesionales from './components/css/Profesionales'
import Resenas from './components/css/Resenas'
import './App.css'
import Homex from './components/css/Homex'





const App = () => {
  const [userAdmin, setUserAdmin] = useState(false)

  return (
    <>
    <Router>
      <NavbarComponents userAdmin={userAdmin} setUserAdmin={setUserAdmin}/>
      <RoutesView setUserAdmin={setUserAdmin}/>
      <Homex></Homex>
      <Carrusel></Carrusel>
      <Profesionales></Profesionales>
      <Resenas></Resenas>
      <Footer/>
    </Router>
    </>
  )
}

export default App

