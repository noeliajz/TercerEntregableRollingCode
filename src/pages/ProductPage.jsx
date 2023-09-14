import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { arrayProductos } from '../data/product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductPage = () => {
  const params = useParams()
  const [product, setProduct] = useState({})


  const getProduct = async (id) => {
    const res = await fetch(`http://localhost:5173/product/${params.id}`)
    const data = await res.json()
    
    setProduct(data)
    

    useEffect(() => {
      getProduct()
      
    }, [])
    
  }
  return (
    <>
      <h1>product page</h1>

      <h2>Producto</h2>
      <div key={product.id} className="card mx-3" style={{ width: '18rem', marginTop: '25px' }}>
          <img src={product.img} className="card-img-top" alt={product.alt} />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.precio}</p>
            
            <button className='btn btn-outline-success' onClick={() => handleClick(articulo._id)}>Agregar Carrito</button>
          </div>
        </div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.Img} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default ProductPage