import React from 'react';
import { TextInput as RNTextInput, TextStyle } from 'react-native';
import { TextInputProps } from 'react-native';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';

type P = TextInputProps & {
  isBold?: boolean;
};

const TextInput: React.ForwardRefRenderFunction<RNTextInput, P> = (
  props: P,
  ref,
) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <RNTextInput
      ref={ref}
      {...props}
      placeholderTextColor={colors.gray200}
      style={[
        styles(
          colors.black,
          colors.white,
          !!props.value && props.secureTextEntry,
          props.isBold,
        ),
        props.style,
      ]}
    />
  );
};

const styles = (
  color: string,
  backgroundColor: string,
  secureTextEntry?: boolean,
  isBold?: boolean,
): TextStyle => ({
  color,
  backgroundColor,
  fontFamily: secureTextEntry
    ? undefined
    : isBold
    ? 'BMHANNAPro'
    : 'BMHANNAAir',
});

export default React.forwardRef(TextInput);
