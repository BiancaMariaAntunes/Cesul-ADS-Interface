import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerCesul } from './router.jsx'
import { CalculadoraProvider } from './context/CalculadoraContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculadoraProvider>
        <RouterProvider router={routerCesul} />
    </CalculadoraProvider>
  </React.StrictMode>,
)
