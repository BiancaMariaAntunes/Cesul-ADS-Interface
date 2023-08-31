import { useState } from "react";

function Exemplo3(){

    const [nome, setNome] = useState("Guilherme")
    const [peso, setPeso] = useState("0")
    const [altura, setAltura] = useState("0")
    const [classifica, setClassifica] = useState()
    

    function adicionaNome(event){
        setNome(event.target.value);
    }
    const adicionaPeso = (event) => {
        setPeso(Number(event.target.value));
    }

    let IMC = peso / (altura*altura)
    
    const classificar = () =>{
        if(IMC <= 18.5){
            setClassifica("Baixo peso") 
        }else if(IMC >= 18.5 && IMC < 24.9){
            setClassifica("Peso normal")  
        }else if(IMC >= 25 && IMC < 29.9){
            setClassifica("Sobrepeso")
        }else if(IMC >= 30 && IMC < 34.9){
            setClassifica("Obesidade Grau I")  
        }else if(IMC >= 35 && IMC < 39.9){
            setClassifica("Obesidade Grau II")  
        }else if(IMC >= 40){
            setClassifica("Obesidade Grau III")  
        }else{
            setClassifica("Invalido" )
        }



    }

    return(
        <div>
            <label> Informe o nome </label>
            <input value={nome} type="text" onChange={adicionaNome} />

            <label> Informe seu peso </label>
            <input type="number" onChange={adicionaPeso} />

            <label> Informe sua altura </label>
            <input  type="number" onChange={(event) => setAltura(Number(event.target.value)) } />
            
            <button onClick={classificar}>Classificar</button>    

            <h2>Seu nome é: {nome}</h2>
            <h2>Seu IMC é: {IMC}</h2>

            <h2> Você esta: {classifica}</h2>

        </div>


    )
}

export default Exemplo3;