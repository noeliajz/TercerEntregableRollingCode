import React from "react";
import gabri from '../components/img/gabri.png'
import noe from '../components/img/noe.png'
import lucas from '../components/img/lucas.png'
import evelin from '../components/img/evelin.png'

const SobreNosotros = () => {
  return (
    <>
      <div className="nosotros">
        <h1>Sobre Nosotros</h1>

        <img src={gabri} alt="" className="equipo" />
        <p>Gabriela : </p>

        <img src={noe} alt="" className="equipo" />
        <p>Noelia: </p>

        <img src={lucas} alt="" className="equipo" />
        <p>Lucas : </p>

        <img src={evelin} alt="" className="equipo" />
        <p>Evelin: </p>
      </div>
    </>
  );
};

export default SobreNosotros;
