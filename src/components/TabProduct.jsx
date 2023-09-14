import React from 'react'
import { arrayProductos } from '../data/product'
import Table from 'react-bootstrap/esm/Table'

const TabProduct = () => {

    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>imagen</th>
                        <th><button className='btn btn-primary' onClick={() => deleteProduct(producto._id)}>AGREGAR PRODUCTO</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayProductos.map((producto) =>
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td><img src={producto.img}/></td>
                                <td>
                                <div><button className='btn btn-danger' onClick={() => deleteProduct(producto._id)}>Eliminar</button>
                                    <button className='btn btn-success' onClick={() => editProduct(producto._id)}>Editar</button></div>
                                    <div><button className='btn btn-warning' onClick={() => selectProduct(producto._id)}>Destacar producto</button></div>
                                    
                                </td>
                            </tr>

                )
        }

            </tbody>
        </Table >
    </>
  )
}

export default TabProduct