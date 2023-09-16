import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CardProductPrueba = ({array}) => {

  const getProduct = async (id) => {
    location.href= `/product/${id}`

  }
  return (
    <>
    {
      array.map((articulo) =>
        <div key={articulo.id} className="card mx-3" style={{ width: '18rem', marginTop: '25px' }}>
          <img src={articulo.img} className="card-img-top" alt={articulo.alt} />
          <div className="card-body">
            <h5 className="card-title">{articulo.nombre}</h5>
            <p className="card-text">{articulo.precio}</p>
            <Link to={`/product/${articulo.id}`} className="btn btn-primary" onClick={() => getProduct(id) }>Ver Mas</Link>
            <button className='btn btn-outline-success' onClick={() => handleClick(articulo._id)}>Agregar Carrito</button>
          </div>
        </div>

      )
    }
  </>
  )
}

export default CardProductPrueba