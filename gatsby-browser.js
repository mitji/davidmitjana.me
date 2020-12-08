import React from 'react';
import { GlobalStyles, MDXStyles } from './src/utils';
import { Footer, Navbar } from './src/components';

export function wrapRootElement({element}) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MDXStyles>
        {element}
      </MDXStyles>
      <Footer />
    </>
  )
}
