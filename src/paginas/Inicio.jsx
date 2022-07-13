import {React,useEffect,useState} from 'react'
import Cliente from '../components/Cliente'
const Inicio = () => {
  const [clientes,setClientes] = useState([])
  useEffect(()=> {
    const getClientesApi = async () => {
      try {
        const url = "http://localhost:4000/clientes"
        const answer = await fetch(url)
        const result = await answer.json()
        setClientes(result)
      } catch (error) {
        console.log(error)
      }
    }
    getClientesApi()
  },[])

  const manejaEliminar = async (id) => {
    const confirm1 = confirm("¿Deseas eliminar este cliente?")
    try {
      const url1 = `http://localhost:4000/clientes/${id}`
      const asnwer1 = await fetch(url1,{
        method:"DELETE"
      })
      await asnwer1.json()
      const arrayclientes1 = clientes.filter(client1 => client1.id !== id)
      setClientes(arrayclientes1)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
    <p className='mt-3'>Administra tus clientes</p>
    <table className='w-full mt-5 table-auto shadow-sm bg-white'>
      <thead className=' bg-blue-800 text-white'>
        <tr>
        <th className='p-2'>Nombre</th>
        <th className='p-2'>Contacto</th>
        <th className='p-2'>Empresa</th>
        <th className='p-2'>Acciones</th>
        </tr>
        
      </thead>
      <tbody>
        {clientes.map(client => (
          <Cliente 
          key={client.id}
          client={client}
          manejaEliminar={manejaEliminar}
          />
        ))}
      </tbody>
    </table>
    
  </>
  )
}

export default Inicio
