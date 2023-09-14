import React from 'react'
import { arrayUsers } from '../data/usurarios'
import Table from 'react-bootstrap/esm/Table'

const TabUsers = () => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>NOMBRE USUARIO</th>
        <th>ROL</th>
        <th><button className='btn btn-primary' onClick={() => deleteProduct(producto._id)}>AGREGAR USUARIO</button></th>
      </tr>
    </thead>
    <tbody>
      {
        arrayUsers.map((usuario) =>
          <tr>
            <td>{usuario.id}</td>
            <td>{usuario.nombre_usuario} {usuario.apellido}</td>
            <td>{usuario.role}</td>
            <td><button className='btn btn-danger' onClick={() => deleteProduct(producto._id)}>Eliminar</button>
            <button className='btn btn-success' onClick={() => deleteProduct(producto._id)}>Editar</button> </td>
          </tr>

        )
      }

    </tbody>
  </Table>
  )
}

export default TabUsers