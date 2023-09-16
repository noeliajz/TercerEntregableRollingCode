import React, { useEffect, useState } from "react";
import TabDailyDoc1 from "../components/TabDailyDoc1";
import { FiArrowRight } from "react-icons/fi";
import Carrusel from "../components/Carrusel";
import michis from "../components/img/michis.png";

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
          <button
            className="left-button pb-3"
            onClick={() => handleClick("Primeros pasos")}
          >
            Primeros pasos: Servicios para mascotas de 0 a 5 años
          </button>
          <br />
          <button
            className="center-button pb-3"
            onClick={() => handleClick("Madurando")}
          >
            Madurando: Servicios para mascotas de 5 a 10 años
          </button>
          <br />
          <button
            className="right-button pb-3"
            onClick={() => handleClick("Adultos")}
          >
            Adultos: Servicios para mascotas de más de 10 años
          </button>
        </div>
        <div>
          <button className="botonaccede pb-3 text-center">
            Accede a nuestros productos <FiArrowRight />
          </button>
        </div>
      </div>
      <Carrusel/>
      
    </>
  );
};

export default Home;
