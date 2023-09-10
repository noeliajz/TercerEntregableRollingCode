import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesView from './routes/RoutesView'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Footer />
      <RoutesView/>
    </Router>
    </>
  )
}

export default App
