import React, { useState } from 'react'
import NavbarComponents from './components/NavbarComponents'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import RoutesView from './routes/RoutesView'

const App = () => {
  const [userAdmin, setUserAdmin] = useState(false)

  return (
    <>
    <Router>
      <NavbarComponents userAdmin={userAdmin} setUserAdmin={setUserAdmin}/>
      <RoutesView setUserAdmin={setUserAdmin}/>
      <Footer/>
    </Router>
    </>
  )
}

export default App

