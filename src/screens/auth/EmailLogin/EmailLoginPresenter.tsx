import React from 'react';
import Text from '~/components/texts/Text';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Controller, RegisterOptions } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { EmailLoginFormData } from './EmailLoginContainer';
import AuthFrame from '~/components/auth/AuthFrame';
import InvalidText from '~/components/texts/InvalidText';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';
import SubmitButton from '~/components/buttons/SubmitButton';
import TextInput from '~/components/TextInput';

type P = UseFormReturn<EmailLoginFormData> & {
  emailRules: RegisterOptions;
  passwordRules: RegisterOptions;
  onSubmit: (data: EmailLoginFormData) => Promise<any>;
  toFindEmail: () => void;
  toFindPassword: () => void;
  toRegister: () => void;
};

const EmailLoginPresenter: React.FC<P> = ({
  control,
  formState: { errors, isValid, isSubmitted, isSubmitting },
  handleSubmit,
  emailRules,
  passwordRules,
  onSubmit,
  toFindEmail,
  toFindPassword,
  toRegister,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);
  const passwordField: React.RefObject<RNTextInput> = React.useRef(null);
  const focusPasswordField = () => passwordField.current?.focus();

  return (
    <AuthFrame title="이메일로 로그인하고">
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value}
              keyboardType="email-address"
              onChangeText={field.onChange}
              onSubmitEditing={focusPasswordField}
              placeholder="이메일"
              returnKeyType="next"
              style={inputStyles(colors.gray100)}
            />
          )}
          name="email"
          rules={emailRules}
        />
        {isSubmitted && errors.email && (
          <InvalidText>{errors.email.message}</InvalidText>
        )}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              ref={passwordField}
              value={field.value}
              secureTextEntry={true}
              onChangeText={field.onChange}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholder="비밀번호"
              returnKeyType="done"
              style={inputStyles(colors.gray100)}
            />
          )}
          name="password"
          rules={passwordRules}
        />
        {isSubmitted && errors.password && (
          <InvalidText>{errors.password.message}</InvalidText>
        )}
      </View>

      <SubmitButton
        onSubmit={handleSubmit(onSubmit)}
        isValid={isValid}
        isSubmitting={isSubmitting}
        text="로그인"
        style={styles.submitButton}
      />

      <View style={styles.linksWrapper}>
        <TouchableOpacity onPress={toFindEmail}>
          <Text style={linkStyles(colors.gray200)}>이메일 찾기</Text>
        </TouchableOpacity>
        <View style={dividerStyles(colors.gray100)} />
        <TouchableOpacity onPress={toFindPassword}>
          <Text style={linkStyles(colors.gray200)}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <View style={dividerStyles(colors.gray100)} />
        <TouchableOpacity onPress={toRegister}>
          <Text style={linkStyles(colors.gray200)}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: -10,
  },
  linksWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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

const dividerStyles = (backgroundColor: string): ViewStyle => ({
  width: 1,
  height: 14,
  marginHorizontal: 16,
  backgroundColor,
});

const linkStyles = (color: string): TextStyle => ({
  color,
});

export default EmailLoginPresenter;
