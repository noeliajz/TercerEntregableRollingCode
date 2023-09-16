import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CardsProducts = ({array}) => {

 
  
  return (
    <>
    
    {
      array.map((articulo) =>
        <div key={articulo._id} className="card mx-3" style={{ width: '18rem', marginTop: '25px' }}>
          <img src={articulo.img} className="card-img-top" alt={articulo.alt} />
          <div className="card-body">
            <h5 className="card-title">{articulo.nombre}</h5>
            <p className="card-text">{articulo.precio}</p>
            <Link to={`/product/${articulo._id}`} className="btn btn-primary" >Ver Mas</Link>
            <button className='btn btn-outline-success' onClick={() => handleClick(articulo._id)}>Agregar Carrito</button>
          </div>
        </div>

      )
    }
  </>
  )
}

export default CardsProducts