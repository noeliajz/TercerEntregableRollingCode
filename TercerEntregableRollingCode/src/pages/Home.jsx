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
      <div className="contenedor-princi paddingHome text-center">
        <h1 className="titulo-princi">
          Veterinaria <hr /> King Pet
        </h1>
        <p className="welcome">Bienvenidos</p>

        <img className="Perrosimg" src={michis} alt="" width={1000} />
      </div>
      <div className="home-text-section text-center">
        <h1 className="primary-heading">Conoce nuestros planes</h1>

        <div className="primary-text p-3">
          {/* <button
            className="left-button pb-3"
            onClick={() => handleClick("Primeros pasos")}
          >
            Primeros pasos: Servicios para mascotas de 0 a 5 años
          </button> */}
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
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src="" alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading text-center">
            Conoce a los profesionales de nuestra Clínica
          </h1>
          <div className="imagen-profesio">
            <div className="profesional">
              <img
                src={vetee}
                alt=""
                style={{ width: "300px", height: "auto" }}
              />
              <p className="nombres">Rodrigo Lozano</p>
            </div>
            <div className="profesional">
              <img
                src={vetex}
                alt=""
                style={{ width: "300px", height: "auto" }}
              />
              <p className="nombres">Patricia Carello</p>
            </div>
          </div>
        </div>
      </div>

      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="opinio-text "> Opiniones de nuestros clientes</p>
          <h1 className="trayecto-text">
            Contamos con mas de cinco años de trayectoria
          </h1>

          <div className="testimonial-section-bottom">
            <img src={jon} alt="" />
            <p>
              La atencion de los Veterinarios es excepcional, soy cliente
              habitual de la Vet.
            </p>
            <img src={ana} alt="" />
            <p>
              Por fin encontre una vaterinaria en donde mi perro se sienta
              comodo y no sienta miedo
            </p>
            <div className="testimonial-stars-container"></div>
          </div>
        </div>
      </div>
      {/* <WeatherApp /> */}
    </>
  );
};

export default Home;
