import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import RuedaGiratoria from '../components/RuedaGiratoria'

const SeeCliente = () => {
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
    cargando ? <RuedaGiratoria /> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (
    <div >
        {cargando ? "cargando..." : (
            <>
            <h1 className='font-black text-4xl text-blue-900'>Ver Cliente:{cliente.nombre} </h1>
      <p className='mt-3'>Informacion del Cliente</p>
      <p className='text-2xl text-gray-500 mt-10'><span className='uppercase text-gray-800 font-bold|'>Cliente:</span> {cliente.nombre}</p>
      {cliente.telefono &&(
        <p className='text-2xl text-gray-500 mt-4'><span className='uppercase text-gray-800 font-bold|'>Telefono:</span> {cliente.telefono}</p>
      )}
      <p className='text-2xl text-gray-500 mt-4'><span className='uppercase text-gray-800 font-bold|'>Empresa:</span>{cliente.empresa} </p>
       {cliente.notas && (
        <p className='text-2xl text-gray-500 mt-4'><span className='uppercase text-gray-800 font-bold|'>Notas:</span> {cliente.notas}</p>
       )}      
            </>
        )}
        
      
    </div>
    )
  )
}

export default SeeCliente
