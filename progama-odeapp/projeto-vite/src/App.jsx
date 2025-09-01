import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/infoAluno'
import InfoCurso from './components/infoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Bahia</h1>
     <h2>É o mundo</h2>
     <Mensagem />   
      <hr />
      <InfoAluno /> 
      <hr />
      <InfoCurso />
    </>
  )
}

export default App
