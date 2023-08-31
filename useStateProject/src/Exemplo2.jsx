import { useState } from "react";

function Exemplo2(){

    const [nome, setNome] = useState("Guilherme")
    const [nota1, setNota1] = useState("0")
    const [nota2, setNota2] = useState("0")
    const [nota3, setNota3] = useState("0")
    const [nota4, setNota4] = useState("0")
    

    function adicionaNome(event){
        setNome(event.target.value);
    }
    const adicionaNota1 = (event) => {
        setNota1(Number(event.target.value));
    }

    const adicionaNota3 = (event) => {
        setNota3(Number(event.target.value));
    }

    const adicionaNota4 = (event) => {
        setNota4(Number(event.target.value));
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4


    return(
        <div>
            <label> Informe o nome </label>
            <input value={nome} type="text" onChange={adicionaNome} />

            <label> Informe a nota 1 </label>
            <input value={nota1} type="number" onChange={adicionaNota1} />

            <label> Informe a nota 2 </label>
            <input value={nota2} type="number" onChange={(event) => setNota2(Number(event.target.value)) } />

            <label> Informe a nota 3 </label>
            <input value={nota3} type="number" onChange={adicionaNota3} />

            <label> Informe a nota 4 </label>
            <input value={nota4} type="number" onChange={adicionaNota4} />

            <h2>Seu nome é {nome}</h2>
            <h2>Sua media é {media}</h2>

            <h2> O aluno foi { media >= 7 ? "Aprovado" : "Reprovado"}</h2>

        </div>


    )

}

export default Exemplo2;