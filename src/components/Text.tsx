import React from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';

type P = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<P> = ({ style, children }: P) => {
  return <RNText style={[style, styles.text]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BMHANNAPro',
  },
});

export default Text;
