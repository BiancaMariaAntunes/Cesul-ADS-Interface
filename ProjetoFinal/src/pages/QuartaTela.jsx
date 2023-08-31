import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import objeto from "../components/primeiratela.module.css"
import { CalculadoraContext } from "../context/CalculadoraContext";
import { useContext } from "react";

function QuartaTela(){

    const {valor} = useContext(CalculadoraContext);


 return(
    <div className={objeto.div}>

    <Header/>

        <div className={objeto.div2}>

            <p className={objeto.p2}>Valor Atual da conta é: {valor}</p>

        </div>

        <section className={objeto.section2}>

            <p className={objeto.p}>Informe um número para multiplicar</p>
            <input className={objeto.input} type="text"/>
            <Link to={"/total"}>
            <button className={objeto.button}>Próximo</button>
            </Link>

        </section>

        <Footer/>


    </div>

 )
}
export default QuartaTela;