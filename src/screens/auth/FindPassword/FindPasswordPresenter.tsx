import React from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { FindPasswordFormData } from '~/screens/auth/FindPassword/FindPasswordContainer';
import { Controller, RegisterOptions } from 'react-hook-form';
import { StyleSheet, TextStyle, View } from 'react-native';
import AuthFrame from '~/components/auth/AuthFrame';
import InvalidText from '~/components/texts/InvalidText';
import SubmitButton from '~/components/buttons/SubmitButton';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';
import TextInput from '~/components/TextInput';

type P = UseFormReturn<FindPasswordFormData> & {
  emailRules: RegisterOptions;
  onSubmit: (data: FindPasswordFormData) => Promise<any>;
};

const FindPasswordPresenter: React.FC<P> = ({
  control,
  formState: { errors, isValid, isSubmitted, isSubmitting },
  handleSubmit,
  emailRules,
  onSubmit,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <AuthFrame title="비밀번호를 찾고">
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value}
              keyboardType="email-address"
              onChangeText={field.onChange}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholder="이메일"
              returnKeyType="next"
              style={emailStyles(colors.gray100)}
            />
          )}
          name="email"
          rules={emailRules}
        />
        {isSubmitted && errors.email && (
          <InvalidText>{errors.email.message}</InvalidText>
        )}
      </View>

      <SubmitButton
        onSubmit={handleSubmit(onSubmit)}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text="비밀번호 찾기"
        style={styles.submitButton}
      />
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: -10,
  },
  email: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
  },
  submitButton: {
    marginTop: 10,
  },
});

const emailStyles = (borderColor: string): TextStyle => ({
  borderWidth: 1,
  borderColor,
  height: 46,
  paddingHorizontal: 10,
});

export default FindPasswordPresenter;
