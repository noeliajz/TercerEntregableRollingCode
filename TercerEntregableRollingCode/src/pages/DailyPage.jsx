import React from 'react'
import AdminNavigate from '../components/AdminNavigate'
import TabDailyDoc1 from '../components/TabDailyDoc1'

const DailyPage = () => {
  return (
    <>
    
    
    <div className="conteiner d-flex "style={{ marginTop: "55px"}}>
      <div className="column w-25 bg-dark">
      <AdminNavigate/>
      </div>
     
      <div className="flex-wrap column ustify-content-center d-flex w-100">
      <TabDailyDoc1/>
      </div>
        
      
      
    </div>
    </>
    
  )
}

export default DailyPage