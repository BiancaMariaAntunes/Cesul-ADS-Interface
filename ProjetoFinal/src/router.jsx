import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TerceiraTela from "./pages/TerceiraTela";
import QuartaTela from "./pages/QuartaTela";
import QuintaTela from "./pages/QuintaTela";
import SegundaTela from './pages/SegundaTela';
import PrimeiraTela from "./pages/PrimeiraTela";
import TelaInicial from "./pages/TelaInicial";
import Login from "./pages/Login";



export const routerCesul = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      children : [
        {path : "/inicial", element: <PrimeiraTela/>},
        {path : "/adicionar", element: <SegundaTela/>},
        {path : "/subtrair", element: <TerceiraTela/>},
        {path : "/multiplicar", element: <QuartaTela/>},
        {path : "/total", element: <QuintaTela/>},
        {path : "/telainicial", element: <TelaInicial/>},
        {path : "/login", element: <Login/>}
      ]
    }
  
  ])