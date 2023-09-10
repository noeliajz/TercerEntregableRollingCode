import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesView from './routes/RoutesView'
import NavbarComponents from './components/NavbarComponents'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <NavbarComponents/>
      <RoutesView/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
