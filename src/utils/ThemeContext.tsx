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

  function updateTheme(val: string) {
    const root = window.document.documentElement;

    // 1. Update theme
    setTheme(val);

    // 2. Save user preference to localStorage
    window.localStorage.setItem('theme', val);
    // 3. Update css variables
    root.style.setProperty(
      '--color-background',
      val === 'light' ? COLORS.background.light : COLORS.background.dark
    );

    root.style.setProperty(
      '--color-text',
      val === 'light' ? COLORS.text.light : COLORS.text.dark
    );
  }

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue('--initial-theme');
    setTheme(initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}
