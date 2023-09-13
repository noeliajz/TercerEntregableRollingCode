import React from 'react'
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [formValue, setFormValue] = useState({
        user:'',
        pass:'',
         
    })
    const handleChange = (ev) => {

        setFormValue({...formValue, [ev.target.name] : ev.target.value})
    }

    const handleClick = () => {
        const user = JSON.parse(localStorage.getItem('user'))
       if (user.user === formnValue.user)
           console.log(user)

     }

  return (
    <div className= 'w-50 d-flex justify-content-center'>
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" name= 'user' onChange={handleChange} placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="text" name= 'pass' onChange={handleChange} placeholder="name@example.com" />
      </Form.Group>
      <Button onClick={handleClick}>Iniciar Sesión</Button>

    </Form>    
   
    </div>
  )
}

export default Login
