import React from 'react';
import styled from '@emotion/styled';

//importo imagenes de personajes que no trae la api
import mike from '../assets/mike2.png';
import jesse from '../assets/jesse.jpg';
import badger from '../assets/badger.jpg';
import walter from '../assets/walterWhite.jpg';
import skyler from '../assets/skylerWhite.png';
import hank from '../assets/hank.jpg';
import saul from '../assets/saul.png';
import fring from '../assets/fring.jpg';
import fly from '../assets/fly.png';

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 25px 20px 15px 0;
  background-color: rgb(255, 255, 255, 0.6);
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 18rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: 'Yusei Magic', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: rgb(71, 67, 67);
    margin-top: 2rem;
  }
`;
const MovieImg = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const ContenedorActor = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <ContenedorActor>
        <p>{frase.author}</p>
        {frase.author === 'Mike Ehrmantraut' ? (
          <MovieImg src={mike} alt="mike" />
        ) : null}
        {frase.author === 'Jesse Pinkman' ? (
          <MovieImg src={jesse} alt="jesse" />
        ) : null}
        {frase.author === 'Badger' ? (
          <MovieImg src={badger} alt="jesse" />
        ) : null}
        {frase.author === 'Walter White' ? (
          <MovieImg src={walter} alt="jesse" />
        ) : null}
        {frase.author === 'Skyler White' ? (
          <MovieImg src={skyler} alt="jesse" />
        ) : null}
        {frase.author === 'Hank Schrader' ? (
          <MovieImg src={hank} alt="jesse" />
        ) : null}
        {frase.author === 'Saul Goodman' ? (
          <MovieImg src={saul} alt="jesse" />
        ) : null}
        {frase.author === 'Gustavo Fring' ? (
          <MovieImg src={fring} alt="jesse" />
        ) : null}
        {frase.author === 'The fly' ? <MovieImg src={fly} alt="jesse" /> : null}
      </ContenedorActor>
    </ContenedorFrase>
  );
};

export default Frase;
