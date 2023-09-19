import React from 'react'
import AdminNavigate from '../components/AdminNavigate'
import TabProduct from '../components/TabProduct'

const ProductAdminPage = () => {
  return (
    <>
    
    
    <div className="conteiner d-flex"style={{ marginTop: "75px"}}>
      <div className="column w-25">
      <AdminNavigate/>
      </div>
     
      <div className="column  w-100">
      <TabProduct/>
      </div>
        
      
      
    </div>
    </>
  )
}

export default ProductAdminPage