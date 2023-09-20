import React from "react";

const SobreNosotros = () => {
  return (
    <>
      <div className="container sobreNosotros">
        <h1 className="text-center">Sobre Nosotros</h1>
        <div className="row">
          <div className="col-6 col-md-3 text-center equipo">
            <img
              src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135575/proyecto/img/gabri.png.png"
              alt="Gabriela"
              className="img-fluid rounded-circle"
            />
            <p>Gabriela: Developer</p>
          </div>
          <div className="col-6 col-md-3 text-center equipo">
            <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135574/proyecto/img/noe.png.png" alt="Noelia" className="img-fluid rounded-circle" />
            <p>Noelia: Teach Lead</p>
          </div>
          <div className="col-6 col-md-3 text-center equipo">
            <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695137130/proyecto/img/Lucas.png.jpg" alt="Lucas" className="img-fluid rounded-circle" />
            <p>Lucas: Developer</p>
          </div>
          <div className="col-6 col-md-3 text-center equipo">
            <img
              src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135574/proyecto/img/evelin.png.png"
              alt="Evelin"
              className="img-fluid rounded-circle"
            />
            <p>Evelin: Scrum Master </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
