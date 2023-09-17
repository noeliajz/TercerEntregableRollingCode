import React from "react";
import gabri from "../components/img/gabri.png";
import noe from "../components/img/noe.png";
import lucas from "../components/img/lucas.png";
import evelin from "../components/img/evelin.png";

const SobreNosotros = () => {
  return (
    <>
      return (
      <div className="container">
        <h1 className="text-center">Sobre Nosotros</h1>

        <div className="row">
          <div className="col-6 col-md-3 text-center equipo">
            <img
              src={gabri}
              alt="Gabriela"
              className="img-fluid rounded-circle"
            />
            <p>Gabriela</p>
          </div>

          <div className="col-6 col-md-3 text-center equipo">
            <img src={noe} alt="Noelia" className="img-fluid rounded-circle" />
            <p>Noelia</p>
          </div>

          <div className="col-6 col-md-3 text-center equipo">
            <img src={lucas} alt="Lucas" className="img-fluid rounded-circle" />
            <p>Lucas</p>
          </div>

          <div className="col-6 col-md-3 text-center equipo">
            <img
              src={evelin}
              alt="Evelin"
              className="img-fluid rounded-circle"
            />
            <p>Evelin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
