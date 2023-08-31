import objeto from "../components/login.module.css"
import img2 from "../components/img2.png"
import { Link } from "react-router-dom";

function TelaInicial(){
    return(

        <div className={objeto.section2}>

            <img className={objeto.img2} src={img2} />
            <div className={objeto.section3}>
                <p className={objeto.p}>Seja bem-vindo</p>
                <h1 className={objeto.h1}>X</h1>
            </div>
            <Link to={"/inicial"}>
                <button className={objeto.button2}>Iniciar</button>
            </Link>



        </div>

    )
}
export default TelaInicial;