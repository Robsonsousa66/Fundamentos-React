import React,{useState} from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function gerarNumNaoCon(array){
    const min = 1;
    const max = 60;
    const novNum = parseInt(Math.random() * (max-min)) + min
    return array.includes(novNum)? gerarNumNaoCon(array) : novNum
  }

  function gerarNum(){
    const novoArray = Array(props.qtdeNum).fill(0).reduce((a,e) =>{
      const NovoNumero = gerarNumNaoCon(a)
      return [...a,NovoNumero]
    }, []).sort((a,b)=>a-b)
    setNumeros(novoArray)
  }

  const [numeros, setNumeros] = useState(Array(props.qtdeNum).fill(0))
  return (
    <>
      <h3>Mega: </h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNum}>Gera Número</button>
    </>
  )
}