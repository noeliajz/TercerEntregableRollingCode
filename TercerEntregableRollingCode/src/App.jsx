import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router}from 'react-router-dom'
import RoutesView from '../routes/RoutesView'


function App() {
 

  return (
    <>
     <Router>
      <RoutesView/>
     </Router>
    </>
  )
}

export default App
