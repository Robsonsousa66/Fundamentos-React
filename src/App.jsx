import './App.css'
import React from 'react';
import Primeiro from './components/primeiro'
import ComParamentro from './components/ComParamentro';
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div className='App'>
  <Card titulo="#03 - Componente com Filhos">
    <ComFilhos>
      <ul>
        <li>Ana</li>
        <li>Carla</li>
        <li>Daniel</li>
        <li>Marcos</li>
      </ul>
    </ComFilhos>
  </Card>
  <Card titulo="#02 - Componente com Paramentro">
    <ComParamentro titulo = "Esse é o titulo" subtitulo="Esse é o subtitulo"/> 
  </Card>
  <Card titulo="#01- Primeiro Componente">
    <Primeiro/>
  </Card>
  {/*  */}
  </div>
