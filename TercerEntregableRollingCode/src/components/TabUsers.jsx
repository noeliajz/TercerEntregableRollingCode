import React, { useEffect, useState } from 'react'
import { arrayUsers } from '../data/usurarios'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const TabUsers = () => {

 const [users, setUsers] = useState([])
 const [refreshUsers, setRefreshUsers] = useState(false);

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
    console.log(res.json())
    setUsers(allUsers)
  }

  const deleteUser = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:8080/api/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}` 
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          setRefreshUsers(true)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

    useEffect(() => {
      getAllUsers()
      setRefreshUsers(false)
    }, [refreshUsers])


  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>NOMBRE USUARIO</th>
        <th>ROL</th>
        <th><Link to={`/createUser`} className="btn btn-primary" style={{background:'#206A5D', color:'#F1F1E8'}} >CREAR USUARIO</Link></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user) =>
          <tr>
            <td>{user._id}</td>
            <td>{user.nombre} {user.apellido}</td>
            <td>{user.role}</td>
            <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Eliminar</button>
            <Link to={`/editUser/${user._id}`} className="btn" style={{background:'#206A5D', color:'#F1F1E8'}} >editar</Link></td>
          </tr>

        )
      }

    </tbody>
  </Table>
  )
}

export default TabUsers