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
      '--color-title',
      val === 'light' ? COLORS.title.light : COLORS.title.dark
    );

    root.style.setProperty(
      '--color-text',
      val === 'light' ? COLORS.text.light : COLORS.text.dark
    );

    root.style.setProperty(
      '--color-gray1',
      theme === 'light' ? COLORS.gray1.light : COLORS.gray1.dark
    );

    root.style.setProperty(
      '--color-gray2',
      theme === 'light' ? COLORS.gray2.light : COLORS.gray2.dark
    );

    root.style.setProperty(
      '--color-gray3',
      theme === 'light' ? COLORS.gray3.light : COLORS.gray3.dark
    );

    root.style.setProperty(
      '--color-navBg',
      theme === 'light' ? COLORS.navBg.light : COLORS.navBg.dark
    );

    root.style.setProperty(
      '--color-footerBg',
      theme === 'light' ? COLORS.footerBg.light : COLORS.footerBg.dark
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
