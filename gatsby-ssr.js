import React from 'react';
import { GlobalStyles } from './src/utils';

export function wrapRootElement({element}) {
  return (
    <>
      <GlobalStyles />
      {/* Navbar */}
      {element}
      {/* Footer */}
    </>
  )
}
