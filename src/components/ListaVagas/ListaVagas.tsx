import React from "react";
import styled from "styled-components";
import { Vaga } from "../Vaga/Vaga";

const ListaVagasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 1200px;
  margin: 20px auto;

  @media (max-width: 768px){
    display: block;
    margin: 30px;
  }
`;

interface ListaVagasProps {
  vagas: { titulo: string; descricao: string }[];
}

export const ListaDeVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  return (
    <ListaVagasContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </ListaVagasContainer>
  );
};
