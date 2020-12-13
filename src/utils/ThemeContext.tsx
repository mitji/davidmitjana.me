// Reference for this dark mode implementation: https://www.joshwcomeau.com/react/dark-mode/

import React, { createContext, useEffect, useMemo, useState, } from 'react';
import { COLORS } from '../constants';

type ThemeContextProps = {
  theme: string | undefined,
  updateTheme: (val: string) => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = (props: {children: React.ReactNode}) => {
  const { children } = props;
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue('--initial-theme');
    setTheme(initialTheme);
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

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )

}
