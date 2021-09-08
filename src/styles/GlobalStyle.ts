import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
        padding: 0;
        margin: 0;
        background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80');
        background-size: cover;
    };
    
  button {
        display: flex;
        cursor: pointer;
        outline: none;
    };

  input {
        display: flex;
        outline: none;
    }

    ul {
      list-style:none;
      padding-left:0px;
    }

`;

export default GlobalStyle;
