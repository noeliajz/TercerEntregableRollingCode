import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CardsAllProducts = ({array}) => {
  
  const handleClick= async (id) =>{
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    const token = JSON.parse(localStorage.getItem('token'))
    
    console.log(idUser)
    const resCartUser = await fetch(`http://localhost:8080/api/users/${idUser}`)
    const dataCartUser = await resCartUser.json()
    console.log(dataCartUser)
    
    console.log(id)
    const idCart = dataCartUser.getUser.idCart
    console.log(idCart)
    const resProd = await fetch(`http://localhost:8080/api/cart/${idCart}/${id}`, {
      method: 'POST',
      headers: {
        "content-type":"application/json",
        'authorization': `Bearer ${token}`
      }
    })    
    const dataProd = await resProd.json()
    if(dataProd.status === 400){
      Swal.fire({
        title: dataProd.msg,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: dataProd.msg,
        showConfirmButton: false,
        timer: 1500
      })
    }
     
   
  }

  return (
    <> 
    {
      array.map((articulo) =>
        <div key={articulo._id} className="card mx-3 text-center" style={{ width: '18rem', marginTop: '25px' }}>
          <img src={articulo.img} className="card-img-top" alt={articulo.alt} />
          <div className="card-body">
            <h5 className="card-title">{articulo.nombre}</h5>
            <p className="card-text">Precio: ${articulo.precio}</p>
            <div>
            <Link to={`/product/${articulo._id}`} className="btn my-2" style={{background:'#206A5D', color:'#F1F1E8'}} >Ver Mas</Link>
            </div>
            <div>
            <button className='btn btn-outline-success' onClick={() => handleClick(articulo._id)}>Agregar Carrito</button>
            </div>
          </div>
        </div>
      )
    }
  </>
  )
}

export default CardsAllProducts
