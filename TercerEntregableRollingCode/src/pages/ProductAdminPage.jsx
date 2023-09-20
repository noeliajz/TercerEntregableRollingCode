import React from 'react'
import AdminNavigate from '../components/AdminNavigate'
import TabProduct from '../components/TabProduct'

const ProductAdminPage = () => {
  return (
    <>
    
    
    <div className="conteiner d-flex "style={{ marginTop: "55px"}}>
      <div className="column w-25 bg-dark">
      <AdminNavigate/>
      </div>
     
      <div className="flex-wrap column ustify-content-center d-flex w-100">
      <TabProduct/>
      </div>
        
      
      
    </div>
    </>
  )
}

export default ProductAdminPage