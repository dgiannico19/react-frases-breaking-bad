import React, { useState, useEffect } from 'react';
import Frase from './Components/Frase';
import Titulo from './Components/Titulo';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background-color: rgb(255, 255, 255, 0.6);
  background-size: 300px;
  font-family: 'Yusei Magic', sans-serif;

  color: blueviolet;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400;
    opacity: 0.8;
  }
`;

function App() {
  //state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  //cargar frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Titulo />
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
