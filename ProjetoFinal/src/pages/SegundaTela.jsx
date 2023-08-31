
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import objeto from "../components/primeiratela.module.css"
import { useContext, useState } from "react";
import { CalculadoraContext } from "../context/CalculadoraContext";

function SegundaTela(){

    const {valor, somar} = useContext(CalculadoraContext);

    const [valorNovo, setValorNovo] = useState();

 return(
    <div className={objeto.div}>

    <Header/>

        <div className={objeto.div2}>

            <p className={objeto.p2}>Valor Atual da conta é: {valor} </p>


        </div>

        <section className={objeto.section2}>

            <p className={objeto.p}>Informe um número para adicionar</p>

            <input className={objeto.input} type="number" onChange={(event) => setValorNovo(event.target.value)}/>
            <Link to={"/subtrair"}>
                <button className={objeto.button} onClick={() => somar(valorNovo)}>Próximo</button>
            </Link>

        </section>

        <Footer/>


    </div>

 )
}
export default SegundaTela;