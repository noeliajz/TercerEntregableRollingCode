import React, { useEffect, useState } from "react";
import TabDailyDoc1 from "../components/TabDailyDoc1";
import { FiArrowRight } from "react-icons/fi";
import Carrusel from "../components/Carrusel";
import michis from "../components/img/michis.png";
import vetex from "../components/img/vetex.jpg";
import vetee from "../components/img/vetee.png";
import jon from "../components/img/jon.png";
import ana from "../components/img/ana.png";
import { Link } from "react-router-dom";
// import WeatherApp from "../components/WeatherApp";

const Home = () => {
  return (
    <>
      <div>
      <div className="container contenedor-princi paddingHome text-center">
        <h1 className="titulo-princi">
          Veterinaria <hr /> King Pet
        </h1>
        <p className="welcome">Bienvenidos</p>

        <img className="Perrosimg img-fluid" src={michis} alt="" />
      </div>

      <div className="container home-text-section text-center">
        <h1 className="primary-heading">Conoce nuestros planes</h1>

        <div className="primary-text p-3">

          <Link to="/firstplan" style={{background:'#206A5D', color:'#F1F1E8'}}  className="left-button pb-3 btn ">Primeros pasos: Servicios para mascotas de 0 a 5 años
          </Link>
          <br />        
          <Link to="/secondplan" style={{background:'#206A5D', color:'#F1F1E8'}}  className="center-button pb-3 btn ">Madurando: Servicios para mascotas de 5 a 10 años
          </Link>
          <br />
          <Link to="/thirdplan" style={{background:'#206A5D', color:'#F1F1E8'}}  className="center-button pb-3 btn ">Adultos: Servicios para mascotas de más de 10 años
          </Link>
        </div>
        <div>
          <Link to="/allproducts" style={{background:'#206A5D', color:'#F1F1E8'}}  className="botonaccede pb-3 btn ">Accede a nuestros productos<FiArrowRight />
          </Link>
        </div>
      </div>

      <Carrusel />

      <div className="container text-center about-section-container">
        <h1 className="primary-heading">
          Conoce a los profesionales de nuestra Clínica1
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="profesional">
              <img src={vetee} alt="" className="img-fluid rounded-circle" />
              <p className="nombres">Rodrigo Lozano</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profesional">
              <img src={vetex} alt="" className="img-fluid rounded-circle" />
              <p className="nombres">Patricia Carello</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container work-section-wrapper">
        <div className="container work-section-wrapper">
  <div className="work-section-top">
    <p className="text-center">Opiniones de nuestros clientes</p>
    <h1 className="trayecto-text text-center">
      Contamos con más de cinco años de trayectoria
    </h1>

    <div className="row">
      <div className="col-md-6">
        <div className="testimonial">
          <img
            src={jon}
            alt=""
            className="img-fluid rounded-circle"
          />
          <p>
            La atención de los Veterinarios es excepcional, soy cliente
            habitual de la Vet.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="testimonial">
          <img
            src={ana}
            alt=""
            className="img-fluid rounded-circle"
          />
          <p>
            Por fin encontré una veterinaria en donde mi perro se sienta
            cómodo y no sienta miedo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div></div>
      {/* <WeatherApp /> */}
    </>
  )
}

export default Home
