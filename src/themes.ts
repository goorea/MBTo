import {
  DarkTheme as BaseDarkTheme,
  DefaultTheme as BaseDefaultTheme,
  Theme,
} from '@react-navigation/native';

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    ...BaseDefaultTheme.colors,
  },
};

export const DarkTheme: Theme = {
  dark: false,
  colors: {
    ...BaseDarkTheme.colors,
  },
};
