import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { margin:0; padding:0; box-sizing: border-box; outline: none; }
  
  body {
    font-family: Poppins, sans-serif;
    background: #111111;
  
    &::before {
      content: "";
      position: fixed;
      width: 2px;
      height: 200px;
      background: -webkit-linear-gradient( #111111, #9464F0);
      opacity: .5;
      display: block;

      margin: 30% 0px 0px 50%;
    }
  }

  input, textarea, button {
    font-family: Poppins, sans-serif;
  }

`;