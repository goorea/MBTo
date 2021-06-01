export type CommonColors = {
  black: string;
  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
};

export type AccentColors = {
  primary: string;
  info: string;
  warn: string;
  error: string;
};

export type SocialColors = {
  kakao: string;
  naver: string;
  google: string;
  facebook: string;
  apple: string;
};

export type Colors = CommonColors &
  AccentColors &
  SocialColors & {
    foreground: string;
    background: string;
  };

export type Themes = {
  light: Colors;
  dark: Colors;
};

export type ThemeContextState = {
  dark: boolean;
  toggleTheme: () => void;
  colors: Colors;
};
