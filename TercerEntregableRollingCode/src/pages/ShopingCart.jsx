import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const ShopingCart = () => {
  const [cart, setCart] = useState([])
  const [cantidadState, setCantidadState] = useState({})
  let suma = 0

  const getCartUser = async () => {
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    
    const resCartUser = await fetch(`http://localhost:8080/api/users/${idUser}`)
    const dataCartUser = await resCartUser.json()

    const idCart = dataCartUser.getUser.idCart
    const resProd = await fetch(`http://localhost:8080/api/cart/${idCart}`)
    const dataProd = await resProd.json()  
    const valoresIniciales = {}
    dataProd.getCart.products.forEach(producto => {
      valoresIniciales[producto._id] = 0
      setCantidadState(valoresIniciales)
    });
    
    setCart(dataProd.getCartUser.products)
  }

   const handleChange = (ev, idProd) => {
     const { value } = ev.target 
     setCantidadState({...cantidadState, [idProd]: parseInt(value)})
   }

   const getResult = (precio, cantidad) => {
    const res = cantidad * precio
    if(isNaN(res)){
      return 0 
    }else{
      suma += res
      return res
     
    }
   }

   const handleClickMP = async () =>{
    const res = await fetch('http://localhost:8080/api/pay',
    {
      method: 'POST',
      headers:{
        "content-type":"application/json"
      },
    })
    const data = await res.json()
    location.href = `${data.res.init_point}`
   }

  useEffect(() => {
    getCartUser()
  }, [])

  useEffect(() => {
    getResult()
  }, [cantidadState])

  
  return (
    <>
      <h1 className='paddingHome'>Carrito</h1>
      
      <Table striped bordered hover responsive className='my-5'>
      <thead>
        <tr>
          <th scope="col">ID Producto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Subtotal</th>
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
            <td>{producto.cantidad}</td>
            <td>
              <input type="number" name="" id="" className='w-25' onChange={(ev) => handleChange(ev, producto._id)}/>
            </td>
            <td>
              {
                getResult(producto.precio, cantidadState[producto._id])
              }

            </td>
          </tr>
          )
        }
      </tbody>
    </Table>
    <div className='text-center py-5'>
      <h3>{suma}</h3>
    </div>
    <div className='text-center py-5'>
    <button className='btn btn-primary' onClick={handleClickMP}>Pagar</button>
    </div>
   
    </>
  )
}

export default ShopingCart
