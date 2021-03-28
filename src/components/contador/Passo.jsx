import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
  return(
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input type="number" id="passoInput" 
      value={props.passo} onChange={e => props.onPassoChange(+e.target.value)}/>
    </div>
  )

}