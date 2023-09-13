import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const CarrouselPublicity = () => {

  const params = useParams()
  const [product, setProduct] = useState({})


  const selectProduct = async (id) => {
    const res = await fetch(`http://localhost:5173/product/${params.id}`)
    const data = await res.json()
    
    setProduct(data)
    

    useEffect(() => {
      selectProduct()
      
    }, [])
  }

  return (
    <><div className='d-flex justify-content-center ' >
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div key={product.id} className="carousel-inner ">
          <div className="carousel-item ">
            <img src={product.img} className="d-block " style={{height: '400px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://masonlineprod.vtexassets.com/arquivos/ids/256791/0779827024818-01-23913.jpg?v=637968982257770000" className="d-block  " style={{height: '400px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://acdn.mitiendanube.com/stores/001/961/189/products/d_688275-mla43882837309_102020-o-2cd7a39503c9c9213a16386576058169-640-0.jpg" className="d-block  " style={{height: '400px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>

  )
}

export default CarrouselPublicity