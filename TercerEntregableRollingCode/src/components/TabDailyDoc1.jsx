import React, { useEffect, useState } from 'react'
import { arrayUsers } from '../data/usurarios'
import Table from 'react-bootstrap/esm/Table'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'

const TabDailyDoc1 = () => {
  const [users, setUsers] = useState([])
 
  const getAllUsers = async () => {
    const token = JSON.parse(localStorage.getItem('token'))

    const res = await fetch('http://localhost:8080/api/users', {
      method:'GET',
      /*headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${token}` 
      }*/
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
        <th>HORARIO</th>
        <th>NOMBRE USUARIO</th>
        <th>NOMBRE DE MASCOTA</th>
        <th>ESPECIE</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user) =>
          <tr>
            <td></td>
            <td>{user.nombre} {user.apellido}</td>
            <td>{user.nombre_mascota}</td>
            <td>{user.especie}</td>
            <td><Link to={`/HistoryUserPage/${user._id}`} className="btn btn-primary" >LEGAJO</Link></td>
          </tr>

        )
      }

    </tbody>
  </Table>
  )
  
}

export default TabDailyDoc1