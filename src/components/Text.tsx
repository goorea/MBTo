import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';

type P = {
  children: React.ReactNode;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<P> = ({ children, style, isBold = false }: P) => {
  return <RNText style={[style, styles(isBold).text]}>{children}</RNText>;
};

const styles = (isBold: boolean) =>
  StyleSheet.create({
    text: {
      fontFamily: isBold ? 'BMHANNAPro' : 'BMHANNAAir',
    },
  });

export default React.memo(Text);
