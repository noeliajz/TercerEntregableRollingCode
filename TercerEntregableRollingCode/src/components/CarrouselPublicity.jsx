import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const CarrouselPublicity = () => {
  
   
  
  return (
    <>
    <div className="conteiner">
    <div className="row">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq-amAK2hyio2LLPDVVdweOm02CfszDz98A&usqp=CAU" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIiC454nu848KhGcTUbQgyAh4iPn_Sv6iZw&usqp=CAU" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XSonWFETWD7qPqQ1bq7jB6RV33bHVXiDMw&usqp=CAU" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>

    </div>
    
    </>
    
  )
}

export default CarrouselPublicity