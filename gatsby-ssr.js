import React from 'react';
import { GlobalStyles, MDXStyles, ThemeProvider } from './src/utils';
import { Footer, Navbar } from './src/components';
import { ScrollToTop } from './src/elements';
import { COLORS } from './src/constants';

// Reference for this dark mode implementation: https://www.joshwcomeau.com/react/dark-mode/

function getInitialTheme() {
  // if user has already chosen the tlight or dark theme
  const localStorageTheme = window.localStorage.getItem('theme');
  if (typeof localStorageTheme === 'string') {
    return localStorageTheme;
  }

  // if not, check OS color scheme with media query
  const osTheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (typeof osTheme.matches === 'boolean') {
    return osTheme.matches ? 'dark' : 'light';
  }

  // if no theme preference detected, default to 'light'
  return 'light'
}

function setColorsFromTheme() {
  const theme = getInitialTheme();
  const root = document.documentElement;
  root.style.setProperty('--initial-theme', theme);

  const colors = '🌈';
  Object.entries(colors).forEach(([name, colorCodes]) => {
    const cssVar = `--color-${name}`;
    root.style.setProperty(cssVar, colorCodes[theme]);
  })

}

const ThemeScripTag = () => {
  // we need to insert the script as a string that will be executed later as a function
  const functionString = String(setColorsFromTheme).replace('\'🌈\'', JSON.stringify(COLORS));
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: functionString }} />;
};

// If the user has JS disabled, insert <style> tag  
// with all the default values for all the colors

const FallbackStyles = () => {
  // use reduce to concatenate outputs with the accumulator
  const defaultCssVariablesString = Object.entries(COLORS).reduce(
    (acc, [name, colorCodes]) => `${acc}\n--color-${name}: ${colorCodes.light};`,
    ''
  );

  const wrappedInSelector = `html { ${defaultCssVariablesString} }`;

  return <style>{wrappedInSelector}</style>;
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => (
  <ThemeProvider>
    <GlobalStyles />
    <Navbar />
    <MDXStyles>
      {element}
    </MDXStyles>
    <ScrollToTop />
    <Footer />
  </ThemeProvider>
)

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<ThemeScripTag />);
};
