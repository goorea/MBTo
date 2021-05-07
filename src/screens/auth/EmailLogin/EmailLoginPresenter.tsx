import React from 'react';
import Text from '~/components/Text';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Controller, RegisterOptions } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { EmailLoginFormData } from './EmailLoginContainer';

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
  const passwordField: React.RefObject<TextInput> = React.useRef(null);
  const focusPasswordField = () => passwordField.current?.focus();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.wrapper}>
          <Text isBold={true} style={styles.title}>
            MBTo
          </Text>
          <Text style={styles.description}>간편하게 로그인하고</Text>
          <Text isBold={true} style={styles.description}>
            나를 알아봐요
          </Text>

          <View style={styles.formWrapper}>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  value={field.value}
                  keyboardType="email-address"
                  onChangeText={field.onChange}
                  onSubmitEditing={focusPasswordField}
                  placeholder="이메일 주소"
                  returnKeyType="next"
                  style={styles.email}
                />
              )}
              name="email"
              rules={emailRules}
            />
            {isSubmitted && errors.email && (
              <Text style={styles.invalidText}>{errors.email.message}</Text>
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
                  style={styles.password}
                />
              )}
              name="password"
              rules={passwordRules}
            />
            {isSubmitted && errors.password && (
              <Text style={styles.invalidText}>{errors.password.message}</Text>
            )}
          </View>

          <View style={styles.linksWrapper}>
            <TouchableOpacity onPress={toFindEmail}>
              <Text style={styles.link}>이메일 찾기</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity onPress={toFindPassword}>
              <Text style={styles.link}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity onPress={toRegister}>
              <Text style={styles.link}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={submitButtonStyles(isValid)}>
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text isBold={true} style={submitButtonTextStyles(isValid)}>
              로그인
            </Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 46,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 24,
  },
  formWrapper: {
    marginTop: 20,
    width: '100%',
  },
  email: {
    borderWidth: 2,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
  },
  password: {
    borderWidth: 2,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  invalidText: {
    color: 'red',
    marginTop: 10,
  },
  linksWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  divider: {
    width: 1,
    height: 14,
    marginHorizontal: 16,
    backgroundColor: '#eee',
  },
  link: {
    color: '#898989',
  },
});

const submitButtonStyles = (isValid: boolean): StyleProp<ViewStyle> => ({
  width: '100%',
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isValid ? '#000' : '#fff',
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderColor: isValid ? '#fff' : '#000',
});

const submitButtonTextStyles = (isValid: boolean): StyleProp<TextStyle> => ({
  fontSize: 22,
  color: isValid ? '#fff' : '#000',
});

export default EmailLoginPresenter;
