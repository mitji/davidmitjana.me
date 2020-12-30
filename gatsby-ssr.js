import React from 'react';
import { GlobalStyles, MDXStyles, ThemeProvider } from './src/utils';
import { Footer, Navbar } from './src/components';
import { ScrollToTop } from './src/elements';
import { COLORS } from './src/constants';

function setSiteSettings() {
  // default settings
  let fontSize;
  let titleFont;
  let textFont;

  // font-size
  const localStorageFontSize = localStorage.getItem('font-size');
  if (typeof localStorageFontSize === 'string') {
    fontSize = localStorageFontSize;
  } else {
    fontSize = '16px'; // default value
  }
  // text font
  const localStorageTextFont = localStorage.getItem('text-font');
  if (typeof localStorageTextFont === 'string') {
    textFont = localStorageTextFont;
  } else {
    // eslint-disable-next-line @typescript-eslint/quotes
    textFont = '-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue", "Helvetica", "Arial"'; // default value
  }
  // tilte font
  const localStorageTitleFont = localStorage.getItem('title-font');
  if (typeof localStorageTitleFont === 'string') {
    titleFont = localStorageTitleFont;
  } else {
    // eslint-disable-next-line @typescript-eslint/quotes
    titleFont = '-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue", "Helvetica", "Arial"'; // default value
  }

  const root = document.documentElement;
  root.style.setProperty('--font-size', fontSize);
  root.style.setProperty('--text-font', textFont);
  root.style.setProperty('--title-font', titleFont);
}

const SiteSettingsTag = () => {
  // we need to insert the script as a string that will be executed later as a function
  const functionString = String(setSiteSettings);

  const calledFunction = `(${functionString})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

// Reference for this dark mode implementation: https://www.joshwcomeau.com/react/dark-mode/
function setColorsFromTheme() {
  // default theme to 'light'
  let theme = 'light';
  // if not, check OS color scheme with media query
  const osTheme = window.matchMedia('(prefers-color-scheme: dark)');
  // if user has already chosen the tlight or dark theme
  const localStorageTheme = localStorage.getItem('theme');

  const hasUsedToggle = typeof localStorageTheme === 'string';

  if (hasUsedToggle) {
    theme = localStorageTheme;
  } else {
    theme = osTheme.matches ? 'dark' : 'light';
  }

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
  const functionString = String(setColorsFromTheme)
    .replace('\'🌈\'', JSON.stringify(COLORS))
    .replace('\'⚡️\'', '--initial-theme');

  const calledFunction = `(${functionString})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
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

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([<FallbackStyles />, <SiteSettingsTag />]);
  setPreBodyComponents(<ThemeScripTag />);
};

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
