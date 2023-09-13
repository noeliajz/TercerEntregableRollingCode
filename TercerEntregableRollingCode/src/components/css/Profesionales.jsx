import React from 'react'
import vetee from '../img/vetee.png'
import vetex from '../img/vetex.jpg' 


const Profesionales = () => {
  return (
    <>
    <div className='about-section-container'>
  <div className='about-background-image-container'>
    <img src="" alt="" />
  </div>
  <div className='about-section-text-container'>
    <h1 className='primary-heading'>
      Conoce a los profesionales de nuestra Clínica
    </h1>
    <div className='imagen-profesio'>
      <div className='profesional'>
        <img src={vetee} alt="" style={{ width: '300px', height: 'auto' }} />
        <p className='nombres'>Rodrigo Lozano</p>
      </div>
      <div className='profesional'>
        <img src={vetex} alt="" style={{ width: '300px', height: 'auto' }} />
        <p className='nombres'>Patricia Carello</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Profesionales