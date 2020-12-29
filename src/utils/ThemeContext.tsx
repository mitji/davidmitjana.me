// Reference for this dark mode implementation: https://www.joshwcomeau.com/react/dark-mode/

import React, { createContext, useEffect, useMemo, useState, } from 'react';
import { COLORS } from '../constants';

type ThemeContextProps = {
  theme: string | undefined,
  updateTheme: (val: string) => void,
  fontSize: string | undefined,
  updateFontSize: (val: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>(null);

export const ThemeProvider = (props: {children: React.ReactNode}) => {
  const { children } = props;
  const [theme, setTheme] = useState<string | undefined>(undefined);
  const [fontSize, setFontSize] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue('--initial-theme');
    const initialFontSize = root.style.getPropertyValue('--font-size');
    setTheme(initialTheme);
    setFontSize(initialFontSize);
  }, []);

  const contextValue = useMemo(() => {
    function updateTheme(newTheme: string) {
      const root = window.document.documentElement;

      window.localStorage.setItem('theme', newTheme);

      Object.entries(COLORS).forEach(([name, colorCodes]: any) => {
        const cssVar = `--color-${name}`;
        root.style.setProperty(cssVar, colorCodes[newTheme]);
      })

      setTheme(newTheme);
    }

    return {
      theme,
      updateTheme
    }
  }, [theme, setTheme]);

  const contextFontSize = useMemo(() => {
    function updateFontSize(size: string) {
      window.localStorage.setItem('font-size', size);
      const root = window.document.documentElement;
      root.style.setProperty('--font-size', size);
      setFontSize(size);
    }

    return {
      fontSize,
      updateFontSize
    }
  }, [fontSize, setFontSize]);

  return (
    <ThemeContext.Provider value={{...contextValue, ...contextFontSize}}>
      {children}
    </ThemeContext.Provider>
  )

}
