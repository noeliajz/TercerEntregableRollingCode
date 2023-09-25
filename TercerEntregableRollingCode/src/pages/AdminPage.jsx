
import React from 'react'
import AdminNavigate from '../components/AdminNavigate';
import '../components/css/adminPage.css'

const AdminPage = () => {
  var name = JSON.parse(localStorage.getItem('nombre'))

  return (
    <> 
  
    <div className="conteiner d-flex vh-50 ">
      <div className=" w-25 bg-dark "style={{ marginTop: "55px"}}>
      <AdminNavigate/>
      </div>
      <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'/>
      <div className=" content">
        <div className="visible">
        <p>BIENVENIDO {name}</p>
        <ul>
          <li>MUNDO</li>
          <li>DOCTOR</li>
          <li>ADMINISTRADOR</li>
        </ul>
        </div>
      
      </div>
        
      
      
    </div>
    </>
  )
}

export default AdminPage