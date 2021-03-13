import './App.css'
import React from 'react';
import Primeiro from './components/primeiro'
import ComParamentro from './components/ComParamentro';
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condisional from './components/Condisional'
import CondisionalIf from './components/CondisionalIf'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
  <div className='App'>
    <Card titulo="#06 - Condisional com IF">
      <CondisionalIf numero={7}>

      </CondisionalIf>
    </Card>
    <Card titulo="#05 - Condisional">
      <Condisional numero={10}>

      </Condisional>
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao>

      </Repeticao>
    </Card>
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
  
 </div>
