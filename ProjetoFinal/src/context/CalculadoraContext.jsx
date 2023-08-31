import { createContext, useState } from "react";

export const CalculadoraContext = createContext();

export const CalculadoraProvider = ({children}) => {

    const [valor, setValor] = useState(50);

    function somar(numeroSoma){
        setValor(parseFloat(valor) + parseFloat(numeroSoma));
    }

    function subtrair(numeroSub){
        setValor(parseFloat(valor) - parseFloat(numeroSub));
    }
 

    return <CalculadoraContext.Provider value={{valor, setValor, somar, subtrair}}>{children}</CalculadoraContext.Provider>
}