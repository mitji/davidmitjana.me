// Reference for this dark mode implementation: https://www.joshwcomeau.com/react/dark-mode/

import React, { createContext, useEffect, useMemo, useState, } from 'react';
import { COLORS } from '../constants';

type ThemeContextProps = {
  theme: string | undefined,
  updateTheme: (val: string) => void,
  fontSize: string | undefined,
  updateFontSize: (val: string) => void,
  textFont: string | undefined,
  updateTextFont: (val: string) => void,
  titleFont: string | undefined,
  updateTitleFont: (val: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>(null);

export const ThemeProvider = (props: {children: React.ReactNode}) => {
  const { children } = props;
  const [theme, setTheme] = useState<string | undefined>(undefined);
  const [fontSize, setFontSize] = useState<string | undefined>(undefined);
  const [textFont, setTextFont] = useState<string | undefined>(undefined);
  const [titleFont, setTitleFont] = useState<string | undefined>(undefined);

  // initialize values
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue('--initial-theme');
    const initialFontSize = root.style.getPropertyValue('--font-size');
    const initialTextFont = root.style.getPropertyValue('--text-font');
    const initialTitleFont = root.style.getPropertyValue('--title-font');
    console.log(initialTextFont);
    setTheme(initialTheme);
    setFontSize(initialFontSize);
    setTextFont(initialTextFont);
    setTitleFont(initialTitleFont);
  }, []);

  // theme
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

  // font size
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

  // text font family
  const contextTextFont = useMemo(() => {
    function updateTextFont(font: string) {
      window.localStorage.setItem('text-font', font);
      const root = window.document.documentElement;
      root.style.setProperty('--text-font', font);
      setTextFont(font);
    }

    return {
      textFont,
      updateTextFont
    }
  }, [textFont, setTextFont]);

  // text font family
  const contextTitleFont = useMemo(() => {
    function updateTitleFont(font: string) {
      window.localStorage.setItem('title-font', font);
      const root = window.document.documentElement;
      root.style.setProperty('--title-font', font);
      setTitleFont(font);
    }

    return {
      titleFont,
      updateTitleFont
    }
  }, [titleFont, setTitleFont]);

  return (
    <ThemeContext.Provider value={{...contextValue, ...contextFontSize, ...contextTextFont, ...contextTitleFont}}>
      {children}
    </ThemeContext.Provider>
  )

}
