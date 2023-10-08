import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CardsAllProducts = ({array}) => {
  
  const handleClick= async (id) =>{
    console.log(id)
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    const token = JSON.parse(localStorage.getItem('token'))
    const resCart = await fetch(`http://localhost:8080/api/users/${idUser}`)
    const dataCart = await resCart.json()
    const idCart = dataCart.getUser.idCart
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
        icon: 'error',
        title: 'ERROR...',
        text: dataProd.msg,
      })
    }else{
      Swal.fire({
        position: 'center',
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
