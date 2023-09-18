import React, { useEffect, useState } from 'react'
import { arrayUsers } from '../data/usurarios'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios'
import Swal from 'sweetalert2'

const TabUsers = () => {
 /* const [users, setUsers] = useState([])
  

  const getAllUsers = async () => {
    const res = await fetch('http://localhost:8080/api/users')
    const  {getAllUs}= res.data
    setUsers(getAllUs)}
 
    useEffect(() => {
      getAllUsers()
    }, [])*/
    const [users, setUsers] = useState([])
  

  const getAllUsers = async () => {
    const token = JSON.parse(localStorage.getItem('token'))

    const res = await fetch('http://localhost:8080/api/users', {
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${token}` 
      }
    })
    const { allUsers } = await res.json()
    setUsers(allUsers)
  }

    useEffect(() => {
      getAllUsers()
    }, [])


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
        users.map((user) =>
          <tr>
            <td>{user._id}</td>
            <td>{user.nombre} {usuario.apellido}</td>
            <td>{user.role}</td>
            <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Eliminar</button>
            <button className='btn btn-success' onClick={() => editUser(user._id)}>Editar</button> </td>
          </tr>

        )
      }

    </tbody>
  </Table>
  )
}

export default TabUsers