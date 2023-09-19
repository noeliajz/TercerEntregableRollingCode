import React from 'react'
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const CreateUserPage = () => {
    const navigate = useNavigate()
    const [inputCheckName, setInputCheckName] = useState(false)
    const [formValues, setFormValues] = useState({
      name: '',
      familyName: '',
      mail:'',
      address:'',
      pass:'',
      rpass:'',
      role: ''
    })
  
    const handleChange = (ev) => {
      setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
      if (formValues.name) {
        setInputCheckName(false)
      }
    }
  
    const handleClick = async (ev) => {
      ev.preventDefault()
      if (formValues.name === '' && formValues.familyName === '' && formValues.mail=== '' && formValues.formValues.address === '' && formValues.pass === ''  && formValues.rpass === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Formulario Vacio!',
        })
      } else if (formValues.name === '') {
        setInputCheckName(true)
      } else {
        if(formValues.pass !== formValues.rpass){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'usuario y/o contraseña incorrecta!',
          })
          return
        }
  
        const res = await fetch(`http://localhost:8080/api/users`, {
          method: 'POST',
         headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombre: formValues.name,
           
            apellido: formValues.familyName,
            direccion: formValues.address,
             usuario:formValues.mail,
            
            contrasenia: formValues.pass,
           role: formValues.role
            
          })
          
        })
        
        const resCreateProd = await res.json()
  
        if (resCreateProd.status === 201) {
          
  
          Swal.fire(
            'Usuario creado correctamente!',
            'success'
          )
  
          setFormValues({
            name: '',
            familyName: '',
            mail:'',
            address:'',
            pass:'',
            role: ''
          })
  
         setTimeout(() => {
          navigate('/adminUsers')
         }, 1000);
        }
      }
    }
  
    return (
      <>
      <div className='d-flex justify-content-center' style={{ marginTop: "100px"}}>
      <form className='w-25'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Nombre</label>
            <input type="text" name='name' value={formValues.name} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Apellido</label>
            <input type="text" name='familyName' value={formValues.familyName} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Mail</label>
            <input type="mail" name='mail' value={formValues.mail} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Domicilio</label>
            <input type="text" name='address' value={formValues.address} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contrseña</label>
            <input type="number" name='pass' value={formValues.pass} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Repetir Contrseña</label>
            <input type="number" name='rpass' value={formValues.rpass} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Role</label>
            <input type="text" name='role' value={formValues.role} className={inputCheckName ? 'form-control is-invalid' : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
  
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Crear Usuario</button>
        </form>

      </div>
        
      </>
    )
  }
  
  export default CreateUserPage