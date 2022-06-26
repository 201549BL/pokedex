import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.jsx";
import { lightTheme } from "../styles/themes/lightTheme";
import Layout from "../components/layout";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Head>
        <title>Third gen pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
