import React from 'react';
import  { Title } from './styled';
import  { Barra } from './styled';
import  { Botao } from './styled';
import  { Input } from './styled';
import  { Check } from './styled';
import  { Corpo } from './styled';
import  { List } from './styled';
import  { Txt } from './styled';


function App() {
  return (
    <Corpo>
        <Title>Star Wars</Title>
        <Barra>
          <Botao>Planetas</Botao>
          <Botao>Pessoas</Botao>
          <Botao>Filmes</Botao>
        </Barra>
        <div>
          <Input></Input>
          <Check>Pesquisar</Check>
        </div>
        <div>
          <List>
            <Txt>Nome: <p> Tatooine </p> </Txt>
            <Txt>Periodo Órbita: <p> 23 </p> </Txt>
            <Txt>População: <p> 2000000 </p> </Txt>
            <Txt>Clima: <p> arid </p> </Txt>
          </List>
        </div>
    </Corpo>
  );
}

export default App;
