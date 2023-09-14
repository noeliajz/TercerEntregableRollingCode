import React from 'react'
import { arrayUsers } from '../data/usurarios'
import Table from 'react-bootstrap/esm/Table'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'

const TabDailyDoc1 = () => {
  return (
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
            <td> <button><Link to={`/record/${user.id}`} className="btn btn-primary" onClick={() => getProduct(id) }>LEGAJO</Link></button>   </td>
          </tr>

        )
      }

    </tbody>
  </Table>
  )
  
}

export default TabDailyDoc1