import React from 'react'
import jon from '../img/jon.png'
import ana from '../img/ana.png'

const Resenas = () => {
  
  return(
    <>
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='opinio-text'> Opiniones de nuestros clientes</p>
        <h1 className='trayecto-text'>Contamos con mas de cinco años de trayectoria</h1>
    

        <div className='testimonial-section-bottom'>
          <img src={jon} alt="" />
          <p>
            La atencion de los Veterinarios es excepcional, soy cliente habitual de la Vet.
          </p>
          <img src={ana} alt="" />
          <p>Por fin encontre una vaterinaria en donde mi perro se sienta comodo y no sienta miedo</p>
          <div className='testimonial-stars-container'>
            
            
          </div>
         

        </div>

      </div>
    </div>
    </>
  )
} 
  

export default Resenas