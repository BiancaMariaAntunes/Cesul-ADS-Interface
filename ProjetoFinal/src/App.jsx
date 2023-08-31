import { Outlet, Navigate } from 'react-router-dom'
import './App.css'
import TelaInicial from './pages/TelaInicial'


function App() {


  return (
    <>
      <Outlet/>
      <Navigate to={"login"}/> 
    </>
  )
}

export default App
