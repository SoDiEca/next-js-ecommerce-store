import { css, Global } from '@emotion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            background-color: lightskyblue;
          }
        `}
      />
      <Head>
        <title>Next.js E-commerce Store</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
