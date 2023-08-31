import { useState } from 'react'
import './App.css'



function AppExemploProps() {
  const [nome, setNome] = useState('Carlos')

  return (
    <>
      <ComponenteFilho nomePessoa={nome}/>
    </>
  )
}


function ComponenteFilho(props){
  return <ComponenteNeto nomePessoaNeto={props.nomePessoa}/>
}

function ComponenteNeto(props){
  return <h1>O nome da pessoa é {props.nomePessoaNeto}</h1>
}

export default AppExemploProps
