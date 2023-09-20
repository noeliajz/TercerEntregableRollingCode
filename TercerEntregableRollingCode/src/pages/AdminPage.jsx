
import React from 'react'
import AdminNavigate from '../components/AdminNavigate';


const AdminPage = () => {


  return (
    <> 
    <div className="conteiner d-flex vh-50 ">
      <div className=" w-25 bg-dark "style={{ marginTop: "55px"}}>
      <AdminNavigate/>
      </div>
     
      <div className="justify-content-center d-flex align-content-center flex-wrap column  w-100">
      <h1>BIENVENIDO</h1>
      </div>
        
      
      
    </div>
    </>
  )
}

export default AdminPage