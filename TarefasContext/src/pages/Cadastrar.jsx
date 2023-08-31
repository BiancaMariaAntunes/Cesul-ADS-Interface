import { useState } from "react";
import useTaskContext from "../hooks/useTaskContext";
import { ThemeProvider } from "../contexts/ThemeContext";



function Cadastrar(){

    const [nomeTarefa, setNomeTarefa] = useState("");
    const {cadastrarTarefa} = useTaskContext();

    return(
            <main>
                <h1>Cadastrar uma tarefa</h1>

                <section>

                    <label>Informe o nome da tarefa</label>
                    <input value={nomeTarefa} onChange={ (e) => setNomeTarefa(e.target.value)}/>

                    <button onClick={()=>cadastrarTarefa({nomeTarefa})}>Cadastrar</button>
                </section>
            </main>

    )

}

export default Cadastrar;