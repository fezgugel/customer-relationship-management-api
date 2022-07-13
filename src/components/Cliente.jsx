import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({client,manejaEliminar}) => {
    const navega = useNavigate()
    const {nombre,empresa,email,telefono,notas,id} = client
  return (
    <tr className='border hover:bg-gray-50'>
      <td className='p-3'>{nombre} </td>
      <td className='p-3'><p><span className='text-gray-800 uppercase font-bold'>Email:</span>{email}</p>  
      <p><span className='text-gray-800 uppercase font-bold'>Tel:</span>{telefono}</p> 
      </td>
      <td className='p-3'>{empresa} </td>
      <td className='p-3'>
      <button type='button'
        onClick={()=> navega(`/clientes/${id}`)}
       className='bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs'>Ver</button>
        <button type='button' 
        className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold mt-3 text-xs'
        onClick={()=> navega(`/clientes/editar/${id}`)}
        >Editar</button>
        <button onClick={()=> manejaEliminar(id)} type='button' className='bg-red-600 mt-3 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs'>Eliminar</button>

         </td>
    </tr>
  )
}

export default Cliente
