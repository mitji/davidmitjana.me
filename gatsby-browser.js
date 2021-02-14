import React from 'react';
import { GlobalStyles, MDXStyles, AppProvider } from './src/utils';
import { Footer, Navbar, OpaqueLayer, Settings } from './src/components';
import { ScrollToTop } from './src/elements';

export const wrapRootElement = ({ element }) => (
  <AppProvider>
    {element}
  </AppProvider>
)

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <MDXStyles>
      {element}
    </MDXStyles>
    <ScrollToTop />
    <OpaqueLayer component={<Settings />} />
    <Footer />
  </>
);
