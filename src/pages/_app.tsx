import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, jsx } from '@emotion/react';
import React from 'react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: {
  Component: React.FC<IntrinsicAttributes>;
  pageProps: IntrinsicAttributes;
  emotionCache: EmotionCache;
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
