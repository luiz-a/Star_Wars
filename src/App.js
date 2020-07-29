import React, { useState, useEffect } from 'react';
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
import  { Message } from './styled';


function App() {
  const [visivelPlanets, setvisivelPlanets] = useState(false);
  const [visivelPeople, setvisivelPeople] = useState(false);
  const [visivelFilms, setvisivelFilms] = useState(false);
  const [error, setError] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const [item01, setItem01] = useState([]);
  const [item02, setItem02] = useState([]);
  const [item03, setItem03] = useState([]);

  useEffect(()=> {
      fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(
          (result) =>{
            setIsLoaded(true);
            setItem01(result.results)
            
          })
  }, [])
  useEffect(()=> {
    fetch("https://swapi.dev/api/films/")
      .then(res => res.json())
      .then(
        (result) =>{
          setIsLoaded(true);
          setItem02(result.results)
          
        })
}, [])
useEffect(()=> {
  fetch("https://swapi.dev/api/planets/")
    .then(res => res.json())
    .then(
      (result) =>{
        setIsLoaded(true);
        setItem03(result.results)
        
      })
}, [])
  function VisivelPlanets(){
    setvisivelPlanets(!visivelPlanets)
  }
  function VisivelPeople(){
    setvisivelPeople(!visivelPeople)
  }
  function VisivelFilms(){
    setvisivelFilms(!visivelFilms)
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isloaded) {
    return <Message>Carregando . . .</Message>;
  } else {
  return (

    <Corpo>
        <Title>Star Wars</Title>
        <Barra>
          <Botao onClick={() => VisivelPlanets()}>Planetas</Botao>
          <Botao onClick={() => VisivelPeople()}>Pessoas</Botao>
          <Botao onClick={() => VisivelFilms()}>Filmes</Botao>
        </Barra>
        <Search>
          <Input></Input>
          <Check>Pesquisar</Check>
        </Search>
        <div>
          <List>
              <Planets isVisible={visivelPlanets}>
                <h3>Planets</h3>
                <div>
                <ul>
                  {item03.map(item => (
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
                  {item01.map(item => (
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
                  {item02.map(item => (
                  <li key={item.title}>
                      <strong>{item.title}</strong>
                      <p>Episódeo: {item.episode_id}</p>
                      <p>Texto de Abertura: {item.opening_crawl}</p>
                      <p>Ano de Lançamento: {item.release_date}</p>
                    </li>
                    ))}
                  </ul>
                </div>
              </Films>
       
          </List>
        </div>
    </Corpo>
  );
}
}

export default App;
