import {React,useEffect,useState} from 'react'
import Formulario from '../components/Formulario'
import { useParams } from 'react-router-dom'
const EditarCliente = () => {
  const {id} = useParams()
    const [cliente,setCliente] = useState({})
    const [cargando,setCargando] = useState(false)
    useEffect(()=>{
        setCargando(!cargando)
        const getClienteApi = async () => {
            try {
                const url1 = `http://localhost:4000/clientes/${id}`
                const answer1 = await fetch(url1)
                const result1 = await answer1.json()
                setCliente(result1)
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setCargando(false)
            }, 500);
        }
        getClienteApi()
    },[])
  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
    <p className='mt-3'>Utiliza este parrafo para editar cliente</p>
    {cliente?.nombre ? (
      <Formulario
    cliente={cliente}
    cargando={cargando}
    />
    ) : <p>Cliente ID No valido</p>}
    
  </>
  )
}

export default EditarCliente
