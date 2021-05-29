import React from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { FindEmailFormData } from '~/screens/auth/FindEmail/FindEmailContainer';
import { Controller, RegisterOptions } from 'react-hook-form';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
  View,
} from 'react-native';
import AuthFrame from '~/components/auth/AuthFrame';
import InvalidText from '~/components/texts/InvalidText';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';
import SubmitButton from '~/components/buttons/SubmitButton';
import TextInput from '~/components/TextInput';

type P = UseFormReturn<FindEmailFormData> & {
  nameRules: RegisterOptions;
  telRules: RegisterOptions;
  onSubmit: (data: FindEmailFormData) => Promise<any>;
};

const FindEmailPresenter: React.FC<P> = ({
  control,
  formState: { errors, isValid, isSubmitted, isSubmitting },
  handleSubmit,
  nameRules,
  telRules,
  onSubmit,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);
  const telField: React.RefObject<RNTextInput> = React.useRef<RNTextInput>(
    null,
  );
  const focusTelField = () => telField.current?.focus();

  return (
    <AuthFrame title="이메일을 찾고">
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              onSubmitEditing={focusTelField}
              placeholder="이름"
              returnKeyType="next"
              style={inputStyles(colors.gray100)}
            />
          )}
          name="name"
          rules={nameRules}
        />
        {isSubmitted && errors.name && (
          <InvalidText>{errors.name.message}</InvalidText>
        )}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              ref={telField}
              value={field.value}
              keyboardType="phone-pad"
              onChangeText={field.onChange}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholder="휴대폰 번호"
              returnKeyType="done"
              style={inputStyles(colors.gray100)}
            />
          )}
          name="tel"
          rules={telRules}
        />
        {isSubmitted && errors.tel && (
          <InvalidText>{errors.tel.message}</InvalidText>
        )}
      </View>

      <SubmitButton
        onSubmit={handleSubmit(onSubmit)}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text="이메일 찾기"
        style={styles.submitButton}
      />
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: -10,
  },
  submitButton: {
    marginTop: 10,
  },
});

const inputStyles = (borderColor: string): TextStyle => ({
  borderWidth: 1,
  borderColor,
  height: 46,
  paddingHorizontal: 10,
  marginTop: 10,
});

export default FindEmailPresenter;
