import './Contador.css'
import React, {Component} from 'react'
import Display from './Display'
import Passo from './Passo'
import Btn from './Btn'

export default class Contador extends Component {
  constructor(props){
    super(props)
    this.state={
      passo: props.passo,
      valor: 0
    }
  }
  inc =() => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }
  dec =() =>{
    this.setState({
      valor: this.state.valor-this.state.passo
    })
  }
  mudarPasso=(novo)=>{
    this.setState({ passo: novo})
  }

  render(){
    return (
      <div className="contador">
        <h2>Contador</h2>

        <Passo passo={this.state.passo} onPassoChange={this.mudarPasso}></Passo>
        
        <Display valor={this.state.valor}></Display>

        <Btn onInc={this.inc} onDec={this.dec}></Btn>

      </div>
    )
  }
}