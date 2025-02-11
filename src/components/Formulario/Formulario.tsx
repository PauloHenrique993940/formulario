import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 40px auto;
  margin-top: 30px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #2575fc;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #6a11cb;
  }

  @media(max-width:768px){
    max-width: 100%;
    margin: 30px;
  }
`;

export const Formulario: React.FC = () => {
  return (
    <FormContainer>
      <label>Nome:</label>
      <input type="text" placeholder="Seu nome" />
      
      <label>Email:</label>
      <input type="email" placeholder="Seu email" />
      
      <label>Mensagem:</label>
      <textarea placeholder="Digite sua mensagem"></textarea>

      <button type="submit">Enviar</button>
    </FormContainer>
  );
};
