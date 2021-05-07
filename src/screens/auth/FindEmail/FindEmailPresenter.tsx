import React from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { FindEmailFormData } from '~/screens/auth/FindEmail/FindEmailContainer';
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
  const telField: React.RefObject<TextInput> = React.useRef<TextInput>(null);
  const focusTelField = () => telField.current?.focus();

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
                  onChangeText={field.onChange}
                  onSubmitEditing={focusTelField}
                  placeholder="이름"
                  returnKeyType="next"
                  style={styles.name}
                />
              )}
              name="name"
              rules={nameRules}
            />
            {isSubmitted && errors.name && (
              <Text style={styles.invalidText}>{errors.name.message}</Text>
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
                  style={styles.tel}
                />
              )}
              name="tel"
              rules={telRules}
            />
            {isSubmitted && errors.tel && (
              <Text style={styles.invalidText}>{errors.tel.message}</Text>
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
              이메일 찾기
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
  name: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
  },
  tel: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
    marginTop: 10,
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

export default FindEmailPresenter;
