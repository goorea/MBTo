import React, { RefObject, useRef } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '~/components/Text';
import { RegisterFormData } from '~/screens/auth/Register/RegisterContainer';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { Controller, RegisterOptions } from 'react-hook-form';
import { MBTI } from '~/types/instances';
import PickerModal, {
  PickerModalHandle,
} from '~/components/modals/PickerModal';

type P = UseFormReturn<RegisterFormData> & {
  nameRules: RegisterOptions;
  nicknameRules: RegisterOptions;
  emailRules: RegisterOptions;
  mbti: MBTI[];
  mbtiRules: RegisterOptions;
  genderRules: RegisterOptions;
  telRules: RegisterOptions;
  onSubmit: (data: RegisterFormData) => Promise<any>;
};

const RegisterPresenter: React.FC<P> = ({
  control,
  formState: { errors, isValid, isSubmitted, isSubmitting },
  handleSubmit,
  watch,
  nameRules,
  nicknameRules,
  emailRules,
  mbti,
  mbtiRules,
  genderRules,
  telRules,
  onSubmit,
}: P) => {
  const nicknameField: RefObject<TextInput> = useRef<TextInput>(null);
  const emailField: RefObject<TextInput> = useRef<TextInput>(null);
  const mbtiPickerModal: RefObject<PickerModalHandle> = useRef<PickerModalHandle>(
    null,
  );
  const genderPickerModal: RefObject<PickerModalHandle> = useRef<PickerModalHandle>(
    null,
  );

  const focusNicknameField = () => nicknameField.current?.focus();
  const focusEmailField = () => emailField.current?.focus();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={focusNicknameField}
                  placeholder="이름"
                  placeholderTextColor="#898989"
                  returnKeyType="next"
                  style={styles.input}
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
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={focusEmailField}
                  placeholder="닉네임"
                  placeholderTextColor="#898989"
                  returnKeyType="next"
                  style={styles.input}
                />
              )}
              name="nickname"
              rules={nicknameRules}
            />
            {isSubmitted && errors.nickname && (
              <Text style={styles.invalidText}>{errors.nickname.message}</Text>
            )}

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={mbtiPickerModal.current?.show}
                  placeholder="이메일"
                  placeholderTextColor="#898989"
                  returnKeyType="next"
                  style={styles.input}
                />
              )}
              name="email"
              rules={emailRules}
            />
            {isSubmitted && errors.email && (
              <Text style={styles.invalidText}>{errors.email.message}</Text>
            )}

            <TouchableOpacity
              onPress={mbtiPickerModal.current?.show}
              style={styles.input}>
              <Text style={fieldTextStyles(watch('mbti'))}>
                {watch('mbti') || 'MBTI'}
              </Text>
            </TouchableOpacity>
            {isSubmitted && errors.mbti && (
              <Text style={styles.invalidText}>{errors.mbti.message}</Text>
            )}

            <TouchableOpacity
              onPress={genderPickerModal.current?.show}
              style={styles.input}>
              <Text style={fieldTextStyles(watch('gender'))}>
                {watch('gender')
                  ? watch('gender') === 'female'
                    ? '여'
                    : '남'
                  : '성별'}
              </Text>
            </TouchableOpacity>
            {isSubmitted && errors.gender && (
              <Text style={styles.invalidText}>{errors.gender.message}</Text>
            )}

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={handleSubmit(onSubmit)}
                  keyboardType="phone-pad"
                  placeholder="휴대폰 번호"
                  placeholderTextColor="#898989"
                  returnKeyType="done"
                  style={styles.input}
                />
              )}
              name="tel"
              rules={telRules}
            />
            {isSubmitted && errors.tel && (
              <Text style={styles.invalidText}>{errors.tel.message}</Text>
            )}
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={submitButtonStyles(isValid)}>
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text isBold={true} style={submitButtonTextStyles(isValid)}>
              회원가입
            </Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <Controller
        control={control}
        render={({ field }) => (
          <PickerModal
            ref={mbtiPickerModal}
            items={mbti.map(value => ({ label: value, value }))}
            value={field.value}
            onChange={field.onChange}
            placeholder="MBTI"
          />
        )}
        name="mbti"
        rules={mbtiRules}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <PickerModal
            ref={genderPickerModal}
            items={[
              { label: '여', value: 'female' },
              { label: '남', value: 'male' },
            ]}
            value={field.value}
            onChange={field.onChange}
            placeholder="성별"
          />
        )}
        name="gender"
        rules={genderRules}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 40,
    marginVertical: -5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 46,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    fontFamily: 'BMHANNAAir',
    fontSize: 16,
  },
  invalidText: {
    color: 'red',
    marginVertical: 5,
  },
});

const fieldTextStyles = (value: string | number): StyleProp<TextStyle> => ({
  color: value ? '#000' : '#898989',
});

const submitButtonStyles = (isValid: boolean): StyleProp<ViewStyle> => ({
  width: '100%',
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isValid ? '#000' : '#e5e5e5',
  marginTop: 'auto',
});

const submitButtonTextStyles = (isValid: boolean): StyleProp<TextStyle> => ({
  color: isValid ? '#fff' : '#898989',
});

export default RegisterPresenter;
