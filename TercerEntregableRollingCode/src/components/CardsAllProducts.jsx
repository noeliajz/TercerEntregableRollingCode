import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import clienteAxios, { config } from '../utils/axiosClient'

const CardsAllProducts = ({array}) => {
  
  const handleClick= async (id) =>{
    try {
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    
    const resCart = await clienteAxios.get(`/users/${idUser}`,  config)
    const resProd = await clienteAxios.post(`/cart/${resCart.data.getUser.idCart}/${id}`, {}, config)
    

    if(resProd.status === 200){
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: resProd.data.msg,
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (error) {
      if(error.response.status === 500){
        Swal.fire({
          icon: 'error',
          title: 'ERROR...',
          text: error.response.data.msg,
        })
    } else if(error.response.status === 400){
      Swal.fire({
        icon: 'error',
        title: 'ERROR...',
        text: error.response.data.msg,
      })
    }
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
