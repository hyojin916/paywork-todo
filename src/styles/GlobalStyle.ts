import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
        padding: 0;
        margin: 0;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
    };
    input{
        display: flex;
        outline: none;
    }
`;

export default GlobalStyle;
