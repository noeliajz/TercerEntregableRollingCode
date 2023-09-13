import React from 'react'
import michis from '../img/michis.png'
import { FiArrowRight } from 'react-icons/fi';
import App from '../../App';


const Homex = () => {
  return (
    <>
   <div className="contenedor-princi">
  <h1 className="titulo-princi">
    Veterinaria <hr /> King Pet
  </h1>
  <p className='welcome'>Bienvenidos</p>
  
  <img className='Perrosimg' src={michis} alt="" width={1000} />
  </div>
<div className='home-text-section'>
  <h1 className='primary-heading'>Conoce nuestros planes</h1>

  <div className='primary-text'>
  <button className="left-button" onClick={() => handleClick('Primeros pasos')}>
    Primeros pasos: Servicios para mascotas de 0 a 5 años
  </button>
  <br />
  <button className="center-button" onClick={() => handleClick('Madurando')}>
    Madurando: Servicios para mascotas de 5 a 10 años
  </button>
  <br />
  <button className='right-button' onClick={() => handleClick('Adultos')}>
    Adultos: Servicios para mascotas de más de 10 años

  </button>
</div>
  <button className='secondary-button' >Accede a nuestros productos <FiArrowRight /> 
  </button>
</div>
    
    
     </>
  )
}

export default Homex