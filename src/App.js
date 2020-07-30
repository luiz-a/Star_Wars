import React, { useState } from 'react';
import { Title } from './styled';
import { Barra } from './styled';
import { Botao } from './styled';
import { Input } from './styled';
import { Check } from './styled';
import { List } from './styled';
import { Planets } from './styled';
import { Films } from './styled';
import { People } from './styled';
import { Search } from './styled';


function App() {
  const [visivelPlanets, setvisivelPlanets] = useState(false);
  const [visivelPeople, setvisivelPeople] = useState(false);
  const [visivelFilms, setvisivelFilms] = useState(false);
  const [planetas, setPlanetas] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [search, setSearch] = useState("");

  function VisivelPlanets() {
    fetch("https://swapi.dev/api/planets/")
      .then(res => res.json())
      .then(
        (result) => {
          setPlanetas(result.results)
          setvisivelPlanets(!visivelPlanets)
        })
  }
  function VisivelPeople() {
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(
        (result) => {
          setPessoas(result.results)

          setvisivelPeople(!visivelPeople)
        });
  }
  function VisivelFilms() {
    fetch("https://swapi.dev/api/films/")
      .then(res => res.json())
      .then(
        (result) => {
          setFilmes(result.results)
          setvisivelFilms(!visivelFilms)
        }
      );
  }
  function Procurar() {
    fetch(`https://swapi.dev/api/planets/?search=${search}`)
      .then(res => res.json())
      .then(
        (result) => {
          const list = result.results;
          if(list){
          setPlanetas(list)
          setvisivelPlanets(true)
        } else {
          setvisivelPlanets(false)
        }
        });
    fetch(`https://swapi.dev/api/people/?search=${search}`)
      .then(res => res.json())
      .then(
        (result) => {
          const list = result.results;
          if(list){
          setPessoas(list)
          setvisivelPeople(true)
        } else {
          setvisivelPeople(false)
        }
        });
    fetch(`https://swapi.dev/api/films/?search=${search}`)
      .then(res => res.json())
      .then(
        (result) => {
          const list = result.results
          if(list){
          setFilmes(list)
          setvisivelFilms(true)
        } else{
          setvisivelFilms(false)
        }
        }
      );
  }
  return (

    <div>
      <Title>Star Wars</Title>
      <Barra>
        <Botao isVisible={visivelPlanets} onClick={() => VisivelPlanets()}>Planetas</Botao>
        <Botao isVisible={visivelPeople} onClick={() => VisivelPeople()}>Pessoas</Botao>
        <Botao isVisible={visivelFilms} onClick={() => VisivelFilms()}>Filmes</Botao>
      </Barra>
      <Search>
        <Input onInput={(e) => setSearch(e.target.value)} placeholder="Digite aqui..."></Input>
        <Check onClick={() => Procurar()}>Pesquisar</Check>
      </Search>
      <div>
        <List>
          <Planets isVisible={visivelPlanets}>
            <h3>Planetas</h3>
            <div>
              <ul>
                {planetas.map(item => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                        <p>Período de rotação: {item.rotation_period}</p>
                        <p>Diâmetro: {item.diameter}</p>
                        <p>Clima: {item.climate}</p>
                        <p>População: {item.population}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Planets>
          <People isVisible={visivelPeople}>
            <h3>Pessoas</h3>
            <div>
              <ul>
                {pessoas.map(item => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <p>Ano Aniversário: {item.birth_year}</p>
                    <p>Gênero:  {item.gender}</p>
                  </li>
                ))}
              </ul>
            </div>
          </People>
          <Films isVisible={visivelFilms}>
            <h3>Filmes</h3>
            <div>
              <ul>
                {filmes.map(item => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>Episódeo: {item.episode_id}</p>
                    <p>Texto de Abertura: { item.opening_crawl}</p>
                    <p>Ano de Lançamento: {item.release_date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Films>

        </List>
      </div>
    </div>
  );
}

export default App;
