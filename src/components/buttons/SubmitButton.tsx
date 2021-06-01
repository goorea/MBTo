import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Text from '~/components/texts/Text';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';

type P = {
  onSubmit: (event: GestureResponderEvent) => void;
  isValid: boolean;
  isSubmitting: boolean;
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const SubmitButton: React.FC<P> = ({
  onSubmit,
  isValid,
  isSubmitting,
  text,
  style,
  textStyle,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={[
        submitButtonStyles(isValid ? colors.foreground : colors.gray300),
        style,
      ]}>
      {isSubmitting ? (
        <ActivityIndicator size="small" color={colors.background} />
      ) : (
        <Text
          isBold={true}
          style={[
            submitButtonTextStyles(
              isValid ? colors.background : colors.gray200,
            ),
            textStyle,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const submitButtonStyles = (backgroundColor: string): ViewStyle => ({
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor,
});

const submitButtonTextStyles = (color: string): TextStyle => ({
  color,
});

export default SubmitButton;
