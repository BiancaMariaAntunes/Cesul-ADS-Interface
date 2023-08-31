import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cadastrar from "./pages/Cadastrar";
import ListarTarefas from "./pages/ListarTarefas";


export const routerCesul = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      children : [
        {path : "/cadastrar", element: <Cadastrar/>},
        {path : "/listarTarefas", element: <ListarTarefas/>}
      ]
    }
  
  ])