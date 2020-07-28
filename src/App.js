import React from 'react';
import  { Title } from './styled';
import  { Barra } from './styled';
import  { Botao } from './styled';
import  { Input } from './styled';
import  { Check } from './styled';
import  { Corpo } from './styled';
import  { List } from './styled';
import  { Planets } from './styled';
import  { Films } from './styled';
import  { People } from './styled';
import  { Search } from './styled';


function App() {
  return (
    <Corpo>
        <Title>Star Wars</Title>
        <Barra>
          <Botao>Planetas</Botao>
          <Botao>Pessoas</Botao>
          <Botao>Filmes</Botao>
        </Barra>
        <Search>
          <Input></Input>
          <Check>Pesquisar</Check>
        </Search>
        <div>
          <List>
              <Planets>
                <h3>Planets</h3>
                <div>
                  <ul>
                    <li>
                      <strong>Tatooine</strong>
                      <p>Período de rotação: </p>
                      <p>Diâmetro: </p>
                      <p>Clima: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>Alderaan</strong>
                      <p>Período de rotação: </p>
                      <p>Diâmetro: </p>
                      <p>Clima: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>Yavin IV</strong>
                      <p>Período de rotação: </p>
                      <p>Diâmetro: </p>
                      <p>Clima: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>Hoth</strong>
                      <p>Período de rotação: </p>
                      <p>Diâmetro: </p>
                      <p>Clima: </p>
                      <p>População :</p>
                    </li>
                  

                  </ul>
                </div>
              </Planets>
              <Films>
               <h3>Filmes</h3>
               <div>
                  <ul>
                  <div>
                  <ul>
                    <li>
                      <strong>A New Hope</strong>
                      <p>Episódeo: </p>
                      <p>Texto de Abertura: </p>
                      <p>Ano de Lançamento: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>The Empire Strikes Back</strong>
                      <p>Episódeo: </p>
                      <p>Texto de Abertura: </p>
                      <p>Ano de Lançamento: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>Return of the Jedi</strong>
                      <p>Episódeo: </p>
                      <p>Texto de Abertura: </p>
                      <p>Ano de Lançamento: </p>
                      <p>População :</p>
                    </li>
                    <li>
                      <strong>The Phantom Menace</strong>
                      <p>Episódeo: </p>
                      <p>Texto de Abertura: </p>
                      <p>Ano de Lançamento: </p>
                      <p>População :</p>
                    </li>

                  </ul>
                </div>
                  </ul>
                </div>
              </Films>
              <People>
                <h3>Pessoas</h3>
                <div>
                  <ul>
                  <li>
                      <strong>Luke Skywalker</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>C-3PO</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>R2-D2</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>Darth Vader</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>Leia Organa</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>Owen Lars</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                    <li>
                      <strong>Beru Whitesun lars</strong>
                      <p>Ano Aniversário: </p>
                      <p>Gênero: </p>
                    </li>
                  </ul>
                </div>
              </People>
          </List>
        </div>
    </Corpo>
  );
}

export default App;
