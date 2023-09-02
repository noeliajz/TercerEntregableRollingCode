
import React from 'react'
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { arrayUsers } from '../data/usurarios';
import { arrayProductos } from '../data/product';


const AdminPage = () => {

  return (
    <>
    <h1>PAGINA DEL AMINISTRADOR</h1>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="product" title="PRODUCTOS">
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
        {
          arrayProductos.map((producto) =>
            <tr>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td> <button className='btn btn-danger' onClick={() => deleteProduct(producto._id)}>Eliminar</button>
            <button className='btn btn-success' onClick={() => deleteProduct(producto._id)}>Editar</button></td>
            </tr>
           
          )
        }

      </tbody>
        </Table>
      </Tab>
      <Tab eventKey="users" title="USUARIOS">
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>ROL</th>
            </tr>
          </thead>
          <tbody>
        {
          arrayUsers.map((usuario) =>
            <tr>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.role}</td>
              <td> <button className='btn btn-danger' onClick={() => deleteProduct(usuario._id)}>Eliminar</button>
            <button className='btn btn-success' onClick={() => deleteProduct(usuario._id)}>Editar</button></td>
            </tr>
           
          )
        }

      </tbody>
        </Table>
      </Tab>
      
    </Tabs>
  </>
  )
}

export default AdminPage