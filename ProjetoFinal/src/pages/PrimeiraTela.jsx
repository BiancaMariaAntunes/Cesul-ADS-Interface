import { Link } from "react-router-dom";
import Header from "../components/Header";
import objeto from "../components/primeiratela.module.css"
import { useContext } from "react";
import { CalculadoraContext } from "../context/CalculadoraContext";

function PrimeiraTela(){

    const {valor, setValor} = useContext(CalculadoraContext);

    return(
        <div className={objeto.div}>

            <Header/>

                <section className={objeto.section}>

                    <p className={objeto.p}>Informe o primeiro número</p>
                    <input type="number" className={objeto.input} onChange={(event) => setValor(event.target.value)}/>
                    <Link to='/adicionar' >
                        <button className={objeto.button}>Próximo</button>
                    </Link>

                </section>


        </div>
    )

}
export default PrimeiraTela;