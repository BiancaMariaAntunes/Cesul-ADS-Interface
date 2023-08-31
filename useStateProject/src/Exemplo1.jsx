import { useState } from "react";

function Exemplo1(){
    const [contar, setContar] = useState(0);
    console.log(contar);
  
    const incrementar = () => {
      setContar(contar + 1)
      console.log(contar)
    }
  
    return (
      <div>
        
      <h1>UseState é um Hooks</h1>
  
      <button onClick={incrementar}>Incrementar</button>
  
      <p>O valor é {contar}</p>
  
      </div>
  
    )

}

export default Exemplo1;