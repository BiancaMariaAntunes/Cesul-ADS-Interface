import objeto from "../components/login.module.css"
import img from "../components/img.png"
import img2 from "../components/img2.png"
import { Link } from "react-router-dom";

function Login(){

    return(

        <div className={objeto.div}>

            <img className={objeto.img} src={img} />

        <section className={objeto.section}>
                
            <img className={objeto.img2} src={img2} />

            <input className={objeto.input} placeholder="Usuário" />

            <input className={objeto.input} placeholder="Senha" />

            <Link to={'/telainicial'}>
                <button className={objeto.button}>Logar</button>
            </Link>

        </section>


        </div>

    )

}
export default Login;