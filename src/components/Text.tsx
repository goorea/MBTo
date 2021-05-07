import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';

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
  return <RNText style={[style, styles(size, isBold).text]}>{children}</RNText>;
};

const styles = (size: number, isBold: boolean) =>
  StyleSheet.create({
    text: {
      fontFamily: isBold ? 'BMHANNAPro' : 'BMHANNAAir',
      fontSize: size,
      lineHeight: size,
    },
  });

export default React.memo(Text);
