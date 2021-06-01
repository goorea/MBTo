import React, { createContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import {
  AccentColors,
  CommonColors,
  SocialColors,
  ThemeContextState,
  Themes,
} from '~/types/themes';

const commonColors: CommonColors = {
  black: '#000',
  white: '#fff',
  gray100: '#eee',
  gray200: '#898989',
  gray300: '#e5e5e5',
};

const accentColors: AccentColors = {
  primary: '#505eeb',
  info: '#5dff66',
  warn: '#ffd656',
  error: '#fb222d',
};

const socialColors: SocialColors = {
  kakao: '#fee500',
  naver: '#1ec800',
  google: '#dd4b39',
  facebook: '#3b5999',
  apple: '#000',
};

const themes: Themes = {
  light: {
    ...commonColors,
    ...accentColors,
    ...socialColors,
    foreground: '#000',
    background: '#fff',
  },
  dark: {
    ...commonColors,
    ...accentColors,
    ...socialColors,
    foreground: '#fff',
    background: '#000',
  },
};

export const ThemeContext = createContext<ThemeContextState>({
  dark: false,
  toggleTheme: () => null,
  colors: themes.light,
});

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
