import React,{useState} from 'react'
import Sub from './Sub'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [texto, setTexto] = useState('Valor')
  const [num, setNum] = useState(0)

  function quandoClicar(valor,texto){
    setNum(valor)
    setTexto(texto)
  }

  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub onClicar={quandoClicar}>Pedro</Sub>
    </div>
  )
}

