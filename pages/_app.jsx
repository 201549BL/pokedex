import { ThemeProvider } from "styled-components";
import GlobalStyle from "/styles/globalStyle";
import { lightTheme } from "../styles/themes/lightTheme";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
