import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { ThemeContext, ThemeContextState } from '~/contexts/ThemeContext';

type P = {
  children: React.ReactNode;
  size?: number;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<P> = ({
  children,
  style,
  size = 16,
  isBold = false,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <RNText style={[styles(size, isBold, colors.foreground).text, style]}>
      {children}
    </RNText>
  );
};

const styles = (size: number, isBold: boolean, color: string) =>
  StyleSheet.create({
    text: {
      fontFamily: isBold ? 'BMHANNAPro' : 'BMHANNAAir',
      fontSize: size,
      lineHeight: size,
      color,
    },
  });

export default Text;
