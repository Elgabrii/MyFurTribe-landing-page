
import * as React from 'react';
import Head from 'next/head';
import '../fonts/hellix/stylesheet.css'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const [documentLoaded, setDocumentLoaded] = React.useState(false)

  React.useEffect(() => {
    setDocumentLoaded(true)
    // let isDomLoaded = true
    // if(isDomLoaded) {
    // }
    
    // return () => {
    //  isDomLoaded = false
    // };
  }, []);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return ( documentLoaded ?
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
    :
    <h1>loading...</h1>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp