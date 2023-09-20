import React from "react";

const Carrusel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
  <p className="textomarcas text-center pb-2">Marcas con las que trabajamos</p>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135569/proyecto/img/marcas.png.png" className="d-block w-100" alt="Marca 1" />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135569/proyecto/img/marcass_gh5ssu.png" className="d-block w-100" alt="Marca 2" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Carrusel;
