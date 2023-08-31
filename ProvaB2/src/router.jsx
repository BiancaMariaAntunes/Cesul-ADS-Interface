import App from "../../ProjetoFinal/src/App";
import { createBrowserRouter } from 'react-router-dom';


export const routerProva = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      children : [
        {path : "/Prova-Tela_1", element: <Tela1/>},
        {path : "/Prova-Tela_2", element: <Tela2/>},
        {path : "/Prova-Tela_3", element: <Tela3/>},
        {path : "/Prova-Tela_4", element: <Tela4/>},
        {path : "/Prova-Tela_5", element: <Tela5/>},

      ]
    }
  
  ])