import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { ThemeContext, ThemeContextState } from '~/contexts/ThemeContext';

type P = {
  children: React.ReactNode;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<P> = ({ children, style, isBold = false }: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <RNText style={[styles(isBold, colors.foreground).text, style]}>
      {children}
    </RNText>
  );
};

const styles = (isBold: boolean, color: string) =>
  StyleSheet.create({
    text: {
      fontFamily: isBold ? 'BMHANNAPro' : 'BMHANNAAir',
      color: color,
    },
  });

export default Text;
