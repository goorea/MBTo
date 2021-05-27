import React, { createContext, useState } from 'react';
import { useColorScheme } from 'react-native';

export type Accents = {
  primary: string;
  info: string;
  warn: string;
  error: string;
};

const accents: Accents = {
  primary: '#505eeb',
  info: '#5dff66',
  warn: '#ffd656',
  error: '#fb222d',
};

export type Colors = Accents & {
  foreground: string;
  background: string;
  gray200: string;
};

export type Themes = {
  light: Colors;
  dark: Colors;
};

const themes: Themes = {
  light: {
    ...accents,
    foreground: '#000',
    background: '#fff',
    gray200: '#898989',
  },
  dark: {
    ...accents,
    foreground: '#fff',
    background: '#000',
    gray200: '#898989',
  },
};

export const ThemeContext = createContext<ThemeContextState>({
  dark: false,
  toggleTheme: () => null,
  colors: themes.light,
});

export type ThemeContextState = {
  dark: boolean;
  toggleTheme: () => void;
  colors: Colors;
};

type P = {
  children?: React.ReactNode;
};

const ThemeContextProvider: React.FC<P> = ({ children }: P) => {
  const dark: boolean = useColorScheme() === 'dark';
  const [theme, setThemes] = useState<ThemeContextState>({
    dark,
    toggleTheme: () => {
      setThemes(prevState => ({
        dark: !prevState.dark,
        toggleTheme: prevState.toggleTheme,
        colors: prevState.dark ? themes.light : themes.dark,
      }));
    },
    colors: dark ? themes.dark : themes.light,
  });

  React.useEffect(() => {
    if (dark !== theme.dark) {
      theme.toggleTheme();
    }
  }, [dark, theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
