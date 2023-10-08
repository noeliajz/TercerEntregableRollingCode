import React, { useEffect, useState } from 'react'
import { arrayProductos } from '../data/product'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const TabProduct = () => {
    const [products, setProducts] = useState([])
    const [refreshProd, setRefreshProd] = useState(false);
    
    const getAllProducts = async () => {
      const res = await axios.get('http://localhost:8080/api/products')
      const  {getAllProd}= res.data
      setProducts(getAllProd)}
   
      useEffect(() => {
          getAllProducts()
      }, [])


      const deleteProduct = async (id) => {
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
    
            fetch(`http://localhost:8080/api/products/${id}`, {
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
              setRefreshProd(true)
          } else if (
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
        getAllProducts()
        setRefreshProd(false)
      }, [refreshProd])
    
    
    return (
        <>
            <Table responsive striped bordered hover className=' w-75'>
                <thead className=''>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>
                        <Link to={`/createProd`} className="btn" style={{background:'#81B214', color:'#F1F1E8'}}  >AGREGAR PRODUCTO</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) =>
                            <tr>
                                <td>{product.nombre}</td>
                                <td>{product.precio}</td>
                                <td>{product.imagen}</td>
                                <td className='d-flex'>
                                <button className='btn btn-danger mx-2 'onClick={() => deleteProduct(product._id)}>Eliminar</button>
                                <Link to={`/editProduct/${product._id}`} className="btn mx-2 " style={{background:'#206A5D', color:'#F1F1E8'}} >Editar</Link> 
                                  <button className="btn" style={{background:'#BFDCAE', color:'#206A5D'}} onClick={() => selectProduct(products._id)}>Destacar producto</button>
                                    
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