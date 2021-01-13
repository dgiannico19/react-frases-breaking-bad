import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-family: 'Yusei Magic', sans-serif;
  font-size: 55px;
  -webkit-text-stroke: 1px black;
  color: blueviolet;
  background-color: rgba(255, 255, 255, 0.2);
`;
const Titulo = () => {
  return <Title>Frases de Breaking Bad</Title>;
};

export default Titulo;
