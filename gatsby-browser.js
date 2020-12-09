import React from 'react';
import { GlobalStyles, MDXStyles } from './src/utils';
import { Footer, Navbar } from './src/components';
import { ScrollToTop } from './src/elements';

export function wrapRootElement({element}) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MDXStyles>
        {element}
      </MDXStyles>
      <ScrollToTop />
      <Footer />
    </>
  )
}
