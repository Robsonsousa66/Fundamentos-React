import './App.css'
import React from 'react';
import Primeiro from './components/basicos/primeiro'
import ComParamentro from './components/basicos/ComParamentro';
import ComFilhos from
  '../src/components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condisional from './components/basicos/Condisional'
import CondisionalIf from './components/basicos/CondisionalIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/Indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
  <div className='App'>
    <h1>Fundamentos</h1>
      <Card titulo="#11 - Mega Sena" color="#73503C">
        <Mega qtdeNum={8}></Mega>
      </Card>
    <div className="Cards">
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10}></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9C0f5f">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#4298B5">
        <Pai sobrenome="Silva"></Pai>
      </Card>
      <Card titulo="#06 - Condisional com IF" color="#FA6900">
        <CondisionalIf numero={7}>

        </CondisionalIf>
      </Card>
      <Card titulo="#05 - Condisional" color="#E94C6F">
        <Condisional numero={10}>

        </Condisional>
      </Card>
      <Card titulo="#04 - Repetição" color="#008BBA">
        <Repeticao>

        </Repeticao>
      </Card>
      <Card titulo="#03 - Componente com Filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Carla</li>
            <li>Daniel</li>
            <li>Marcos</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com Paramentro" color="#FF85CB">
        <ComParamentro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
      </Card>
      <Card titulo="#01- Primeiro Componente" color="#92B064">
        <Primeiro />
      </Card>
    </div>


  </div>
