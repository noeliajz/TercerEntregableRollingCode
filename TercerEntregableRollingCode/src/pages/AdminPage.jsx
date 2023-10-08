
import React from 'react'
import '../components/css/adminPage.css'

const AdminPage = () => {
  var name = JSON.parse(localStorage.getItem('nombre'))

  return (
    <> 
    <section className="styleAdminPage text-center ">
      <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'/>
      <div className="content ">
        <h3 className='content'>¡Bienvenido {name}!</h3>
      </div> 
    </section>
    </>
  )
}

export default AdminPage