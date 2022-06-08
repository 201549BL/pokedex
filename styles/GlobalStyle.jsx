import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "pokemon";
    src: url('/fonts/pokemon-normal.woff2') format("woff2");
  }

  body {
    background: white;
    font-family: "pokemon";
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "pokemon";

    box-sizing: border-box;
  }


`;

export default GlobalStyle;
