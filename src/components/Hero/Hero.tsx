import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  padding: 50px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  position: sticky;

  @media (max-width: 768px){
    margin: 0px;
    background: linear-gradient(to right, #2575fc, #6a11cb);
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <h1>Encontre a vaga dos seus sonhos!</h1>
    </HeroSection>
  );
};
