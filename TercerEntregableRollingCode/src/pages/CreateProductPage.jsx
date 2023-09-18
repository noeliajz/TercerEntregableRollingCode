import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const CreateProductPage = () => {
    const navigate = useNavigate()
    const [inputCheckName, setInputCheckName] = useState(false)
    const [formValues, setFormValues] = useState({
      name: '',
      descripcion: '',
      price: 0,  
      code: '',
      cantidad: 0
    })
  
    const handleChange = (ev) => {
      setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
      if (formValues.name) {
        setInputCheckName(false)
      }
    }
    
  
    const handleClick = async (ev) => {
      ev.preventDefault()
      const token = JSON.parse(localStorage.getItem('token'))
      if (formValues.name === '' && formValues.price === '' && formValues.code === '' && formValues.descripcion === '' && formValues.cantidad === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Formulario Vacio!',
        })
      } else if (formValues.name === '') {
        setInputCheckName(true)
      } else {
        const res = await fetch(`http://localhost:8080/api/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            nombre: formValues.nombre,
            precio: formValues.precio,
             codigo: formValues.codigo,
            descripcion: formValues.descripcion,
            cantidad: formValues.cantidad
          })
          
        })
        const resCreateProd = await res.json()
  
        if (resCreateProd.status === 201) {
                    
          Swal.fire(
            'Producto creado correctamente!',
            'success'
          )
  
          setFormValues({
            nombre: '',
            descripcion:'',
            precio: 0,          
            codigo: '',
            cantidad:0
          })
  
         setTimeout(() => {
          navigate('/admin')
         }, 1000);
        }
      }
    }
  
    return (
      <>
      <div className='d-flex justify-content-center ' style={{ marginTop: "50px"}}>
      <form className='w-25'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Nombre</label>
            <input type="text" name='name' value={formValues.nombre} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>         
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Descripcion</label>
            <input type="text" name='descripcion' value={formValues.descripcion} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Precio</label>
            <input type="number" name='price' value={formValues.precio} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Codigo</label>
            <input type="text" name='code' value={formValues.codigo} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">cantidad</label>
            <input type="number" name='cantidad' value={formValues.cantidad} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
  
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Crear Producto</button>
        </form>
      </div>
       
      </>
    )
}

export default CreateProductPage


