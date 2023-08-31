import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import objeto from "../components/quintatela.module.css"

function QuintaTela(){
    return(
        <>
            <div className={objeto.div}>

                
            <Header />

                    <section className={objeto.section}>

                        <p className={objeto.p}>Total da sua conta é</p>

                        <h1 className={objeto.h1}>X</h1>
                        
                        <Link to={"/inicial"}>
                        <button className={objeto.button}>Reiniciar</button>
                        </Link>

                    </section>

            <Footer />


            </div>
        
        </>

    )
}
export default QuintaTela;