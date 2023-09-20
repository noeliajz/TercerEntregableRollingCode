import React from 'react'
import AdminNavigate from '../components/AdminNavigate'
import TabUsers from '../components/TabUsers'

const UserAdminPage = () => {
  return (
    <>
        <div className="conteiner d-flex"style={{ marginTop: "55px"}}>
      <div className="column w-25">
      <AdminNavigate/>
      </div>
     
      <div className="column  w-100">
      <TabUsers/>
      </div>
        
      
      
    </div>

    
    
    </>
  )
}

export default UserAdminPage