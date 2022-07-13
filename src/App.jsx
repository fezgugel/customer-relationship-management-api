import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import LoginForm from './paginas/LoginForm'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import SeeCliente from './paginas/SeeCliente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='nuevo' element={<NuevoCliente />} />
          <Route path='editar/:id' element={<EditarCliente />} />
          <Route path=':id' element={<SeeCliente />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
