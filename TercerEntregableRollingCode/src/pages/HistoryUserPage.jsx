import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const HistoryUserPage = () => {
    const params = useParams();
    const [user, setUser] = useState({});
  
    const getOneUser = async () => {
      const res = await fetch(`http://localhost:8080/api/users/${params.id}`);
      const data = await res.json();
      const { getUser} = data;
      console.log(getUser);
      setUser(getUser);
    };
    useEffect(() => {
        getOneUser();
    }, []);
    
  return (
    <>
    <div className="d-flex justify-content-center ">

    <div className="container  pb-5"style={{ marginTop: "100px" }}>
        <div className="row ">
          <div className="col ">
            {/* <div key={product?._id}>
          <h4>{product?.nombre}</h4>
          <h4>{product?.precio}</h4>
          <h4>{product?.codigo}</h4> */}

            <div
              key={user._id}
              className="card  text-center  "
              style={{ width: "18rem", marginTop: "25px" }}
            >
             
              <div className="card-body">
                <h5 className="card-title">USUARIO:</h5>
                <p className="card-text">NOMBRE Y APELLIDO: {user.nombre}{user.apellido}</p>
                <p className="card-text">EMAIL: {user.usuario}</p>
                <p className="card-text">
                  DIRECCION: {user.direccion}
                </p>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  pb-5"style={{ marginTop: "100px" }}>
        <div className="row ">
          <div className="col ">
            {/* <div key={product?._id}>
          <h4>{product?.nombre}</h4>
          <h4>{product?.precio}</h4>
          <h4>{product?.codigo}</h4> */}

            <div
              key={user._id}
              className="card  text-center "
              style={{ width: "18rem", marginTop: "25px" }}
            >
             
              <div className="card-body">
                <h5 className="card-title">MASCOTA:</h5>
                <p className="card-text">NOMBRE: </p>
                <p className="card-text">ESPECIE: </p>
                <p className="card-text">
                  EDAD:
                </p>
                <p className="card-text">PESO:</p>
                <p className="card-text">HISTORIAL: </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )

        }
export default HistoryUserPage