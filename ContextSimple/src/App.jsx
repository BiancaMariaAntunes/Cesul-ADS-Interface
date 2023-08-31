import { createContext, useContext, useState } from 'react'
import './App.css'

const contextExemplo = createContext();

function App() {
  const [nome, setNome] = useState('Carlos')
  const [sobrenome, setSobrenome] = useState('Silva')
  const [idade, setIdade] = useState('18')

  return (
    <>
    <contextExemplo.Provider value={{nome, sobrenome, setNome, idade}}>
      <ComponenteFilho />
    </contextExemplo.Provider>
    </>
  )
}


function ComponenteFilho(){

  const {setNome} = useContext(contextExemplo);

  setNome('Guilherme')

  return <ComponenteNeto />
}

function ComponenteNeto(props){

  const {nome, sobrenome} = useContext(contextExemplo);

  return (
  <div> 
    <h1>O nome da pessoa é {nome} {sobrenome}</h1>
    <ComponenteBisNeto /> 
    </div>

) 
}

function ComponenteBisNeto(props){

  const {idade} = useContext(contextExemplo);

  return <h1>Sua idade é {idade} </h1>

}

export default App
