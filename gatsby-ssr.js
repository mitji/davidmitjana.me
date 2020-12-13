import React from 'react';
import { GlobalStyles, MDXStyles, ThemeProvider } from './src/utils';
import { Footer, Navbar } from './src/components';
import { ScrollToTop } from './src/elements';
import { COLORS } from './src/constants';

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

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
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

    const theme = getInitialTheme();

    const root = document.documentElement;

    root.style.setProperty(
      '--color-background',
      theme == 'light' ? '${COLORS.background.light}' : '${COLORS.background.dark}'
    );

    root.style.setProperty(
      '--color-title',
      theme == 'light' ? '${COLORS.title.light}' : '${COLORS.title.dark}'
    );

    root.style.setProperty(
      '--color-text',
      theme == 'light' ? '${COLORS.text.light}' : '${COLORS.text.dark}'
    );

    root.style.setProperty(
      '--color-gray1',
      theme == 'light' ? '${COLORS.gray1.light}' : '${COLORS.gray1.dark}'
    );

    root.style.setProperty(
      '--color-gray2',
      theme == 'light' ? '${COLORS.gray2.light}' : '${COLORS.gray2.dark}'
    );

    root.style.setProperty(
      '--color-gray3',
      theme == 'light' ? '${COLORS.gray3.light}' : '${COLORS.gray3.dark}'
    );

    root.style.setProperty(
      '--color-navBg',
      theme === 'light' ? '${COLORS.navBg.light}' : '${COLORS.navBg.dark}'
    );

    root.style.setProperty(
      '--color-footerBg',
      theme === 'light' ? '${COLORS.footerBg.light}' : '${COLORS.footerBg.dark}'
    );

    root.style.setProperty('--initial-theme', theme);
  })()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
