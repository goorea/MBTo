import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type P = {
  children: React.ReactNode;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<P> = ({ children, style, isBold = false }: P) => {
  const { colors } = useTheme();

  return (
    <RNText style={[style, styles(isBold, colors.text).text]}>
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
