import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  max-width:1200px;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 768px){
    margin: 0;
    height: 10vh;
    
  
  }

`;

export const Header: React.FC = () => {
  return <HeaderContainer>Portal de Vagas</HeaderContainer>;
};
