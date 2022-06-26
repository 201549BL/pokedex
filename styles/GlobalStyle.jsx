import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "pokemon";
    src: url('/fonts/pokemon-normal.woff2') format("woff2");
  }

  @font-face {
    font-family: "pokemon-emerald";
    src: url('/fonts/pkmnrs.ttf') format("truetype");
  }



  * {
    margin: 0;
    padding: 0;
    font-family: "pokemon-emerald";
    box-sizing: border-box;

  }
`;

export default GlobalStyle;
