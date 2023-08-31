import { useState } from "react";
import ItemTodo from "./ItemTodo";




function Todo(){

    const [tarefa, setTarefa] = useState("");
    const [prioridade, setPrioridade] = useState(false);
    const [listaTarefas, setListaTarefas] = useState([]);

    
function modificarNome(tarefa){
    setTarefa(tarefa);
}
const adicionarTarefa = () => {

    setTarefa("");
    setPrioridade(false);

    setListaTarefas([
        {
            mensagem : tarefa,
            prioridade : prioridade,
            data : new Date().toDateString()
        }, ...listaTarefas
    ])

    console.log(listaTarefas)

}

    return(
        <main>

            <h1>Todo Cesul</h1>

            <section>

                <div>
                    <input type="text" value={tarefa} onChange={(e) => modificarNome(e.target.value)}/>
                    <input type="checkbox" checked={prioridade} defaultChecked={prioridade} onChange={(e) => setPrioridade(e.target.checked)}/>
                </div>

                <button type="button" onClick={adicionarTarefa}>ADICIONAR</button>

                {tarefa}

                <div>

                    {
                        listaTarefas.map( (item) => (
                            <ItemTodo item={item}/>
                        ))
                    }

                </div>

            </section>

        </main>

    )

}

export default Todo;