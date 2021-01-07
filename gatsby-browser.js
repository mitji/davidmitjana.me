import React from 'react';
import { GlobalStyles, MDXStyles, ThemeProvider } from './src/utils';
import { Footer, Navbar } from './src/components';
import { ScrollToTop } from './src/elements';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <MDXStyles>
      {element}
    </MDXStyles>
    <ScrollToTop />
    <Footer />
  </>
);
