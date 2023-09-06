import React from 'react'
import { arrayProductos } from '../data/product'

const UserPage = () => {

  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const res = await fetch(arrayProductos)
    const {getAllProd} = await res.json()
    setProducts(getAllProd)
    
    useEffect(() => {
      getAllProducts()
    }, [])
  
  }
  return (
    <>
    <h1>PAGINA DEL USUARIO</h1>
    </>
  )
}

export default UserPage