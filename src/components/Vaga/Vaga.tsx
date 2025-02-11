import React from "react";
import styled from "styled-components";


const VagaContainer = styled.div`
  border: 1px solid #0b0fdb;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ff7e5f, #feb47b, #6a11cb, #2575fc);

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #ff6a00, #097fee, #8c00ff, #2a2a72);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
  }
`;




interface VagaProps {
  titulo: string;
  descricao: string;
}

export const Vaga: React.FC<VagaProps> = ({ titulo, descricao }) => {
  return (
    <VagaContainer>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </VagaContainer>
  );
};
