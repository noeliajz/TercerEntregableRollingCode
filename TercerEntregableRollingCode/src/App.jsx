import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesView from './routes/RoutesView'
import NavbarComponents from './components/NavbarComponents'
import Footer from './components/Footer'

function App() {
  const [userAdmin, setUserAdmin] = useState(false)

  return (
    <>
    <Router>
      <NavbarComponents userAdmin={userAdmin} setUserAdmin={setUserAdmin}/>
      <RoutesView/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
