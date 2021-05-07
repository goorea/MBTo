import React from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { FindPasswordFormData } from '~/screens/auth/FindPassword/FindPasswordContainer';
import { Controller, RegisterOptions } from 'react-hook-form';
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
import Text from '~/components/Text';

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
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.wrapper}>
          <Text size={46} isBold={true} style={styles.title}>
            MBTo
          </Text>
          <Text size={24} style={styles.description}>
            간편하게 로그인하고
          </Text>
          <Text size={24} isBold={true} style={styles.description}>
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
                  onSubmitEditing={handleSubmit(onSubmit)}
                  placeholder="이메일"
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
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={submitButtonStyles(isValid)}>
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text isBold={true} style={submitButtonTextStyles(isValid)}>
              비밀번호 찾기
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
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
  },
  formWrapper: {
    marginTop: 20,
    width: '100%',
  },
  email: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
  },
  invalidText: {
    color: 'red',
    marginTop: 10,
  },
});

const submitButtonStyles = (isValid: boolean): StyleProp<ViewStyle> => ({
  width: '100%',
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isValid ? '#000' : '#e5e5e5',
});

const submitButtonTextStyles = (isValid: boolean): StyleProp<TextStyle> => ({
  color: isValid ? '#fff' : '#898989',
});

export default FindPasswordPresenter;
