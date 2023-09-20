import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';



const ShopingCart = () => {
  const [cart, setCart] = useState([])
  const getCartUser = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    
   console.log(idUser)
    const resCartUser = await fetch(`http://localhost:8080/api/users/${idUser}`, {
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${token}` 
      }
    })
    const dataCartUser = await resCartUser.json()
    console.log(dataCartUser.getUser.idCart)

    const idCart = dataCartUser.getUser.idCart
    const resProd = await fetch(`http://localhost:8080/api/cart/${idCart}`, {
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${token}` 
      }
    })
    const dataProd = await resProd.json()
    /*      console.log(dataProd.getCartUser.products)    
     */
    setCart(dataProd.getCartUser.products)

  }

  useEffect(() => {
    getCartUser()
  }, [])

  return (
    <>
      <h1 className='paddingHome'>Carrito</h1>
      
      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th scope="col">ID Producto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((producto) => 
          <tr key={producto._id}>
            <th scope='row'>{producto._id}</th>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.precio}</td>
            <td>
              <input type="number" name="" id=""/>
            </td>
          </tr>
          )
        }
      </tbody>
    </Table>
    </>
  )
}

export default ShopingCart
