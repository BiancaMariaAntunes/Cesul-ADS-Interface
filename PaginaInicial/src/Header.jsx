import objeto from './Header.module.css'

function Header(){
    return(
        <header className={objeto.header}>
            <img className={objeto.img} src='./logo.png'/>
            <p className={objeto.texto1}>Direito</p>
            <p>GPT</p>

        </header>

    )
}

export default Header