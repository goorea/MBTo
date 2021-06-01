import React from 'react';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';
import Text from '~/components/texts/Text';
import { TextStyle } from 'react-native';

type P = {
  children: React.ReactNode;
  style?: TextStyle;
};

const InvalidText: React.FC<P> = ({ children, style }: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return <Text style={[styles(colors.error), style]}>{children}</Text>;
};

const styles = (color: string) => ({
  color,
  marginTop: 10,
});

export default InvalidText;
