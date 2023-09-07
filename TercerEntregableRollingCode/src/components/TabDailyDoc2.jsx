import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { arrayUsers } from '../data/usurarios'
import { Link } from 'react-router-dom'

const TabDailyDoc2 = () => {

  const getProduct = async (id) => {
    location.href= `/product/${id}`

  }

  return (
  
  <> 
    <div>TabDailyDoc2</div>
   
      
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>HORARIO</th>
          <th>NOMBRE USUARIO</th>
          <th>NOMBRE DE MASCOTA</th>
          <th>TIPO DE MASCOTA</th>
        </tr>
      </thead>
      <tbody>
        {
          arrayUsers.map((usuario) =>
            <tr>
              <td></td>
              <td>{usuario.nombre_usuario} {usuario.apellido}</td>
              <td>{usuario.nombre_mascota}</td>
              <td>{usuario.especie}</td>
              <td> <Link to={`/record/${usuario.id}`} className="btn btn-primary" onClick={() => getProduct(id) }>LEGAJO</Link> </td>
            </tr>
  
          )
        }
  
      </tbody>
    </Table>
   
      </>
       
  )
}

export default TabDailyDoc2