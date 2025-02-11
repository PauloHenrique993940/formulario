import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Source Code Pro", serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
  

  body {
    background-color: #f5f5f5;
    color: #333;
  }
`;

export default GlobalStyles;
