import React, { RefObject, useRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '~/components/texts/Text';
import { RegisterFormData } from '~/screens/auth/Register/RegisterContainer';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { Controller, RegisterOptions } from 'react-hook-form';
import { MBTI } from '~/types/instances';
import PickerModal, {
  PickerModalHandle,
} from '~/components/modals/PickerModal';
import AuthFrame from '~/components/auth/AuthFrame';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';
import InvalidText from '~/components/texts/InvalidText';
import SubmitButton from '~/components/buttons/SubmitButton';
import TextInput from '~/components/TextInput';

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
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);
  const nicknameField: RefObject<RNTextInput> = useRef<RNTextInput>(null);
  const emailField: RefObject<RNTextInput> = useRef<RNTextInput>(null);
  const mbtiPickerModal: RefObject<PickerModalHandle> = useRef<PickerModalHandle>(
    null,
  );
  const genderPickerModal: RefObject<PickerModalHandle> = useRef<PickerModalHandle>(
    null,
  );

  const focusNicknameField = () => nicknameField.current?.focus();
  const focusEmailField = () => emailField.current?.focus();

  return (
    <AuthFrame title="회원가입하고" wrapperStyle={styles.frame}>
      <View style={styles.wrapper}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              onSubmitEditing={focusNicknameField}
              placeholder="이름"
              placeholderTextColor={colors.gray200}
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
              value={field.value}
              onChangeText={field.onChange}
              onSubmitEditing={focusEmailField}
              placeholder="닉네임"
              placeholderTextColor={colors.gray200}
              returnKeyType="next"
              style={inputStyles(colors.gray100)}
            />
          )}
          name="nickname"
          rules={nicknameRules}
        />
        {isSubmitted && errors.nickname && (
          <InvalidText>{errors.nickname.message}</InvalidText>
        )}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              onSubmitEditing={mbtiPickerModal.current?.show}
              placeholder="이메일"
              placeholderTextColor={colors.gray200}
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

        <TouchableOpacity
          onPress={mbtiPickerModal.current?.show}
          style={pickerStyles(colors.gray100, colors.white)}>
          <Text
            style={fieldTextStyles(
              watch('mbti') ? colors.black : colors.gray200,
            )}>
            {watch('mbti') || 'MBTI'}
          </Text>
        </TouchableOpacity>
        {isSubmitted && errors.mbti && (
          <InvalidText>{errors.mbti.message}</InvalidText>
        )}

        <TouchableOpacity
          onPress={genderPickerModal.current?.show}
          style={pickerStyles(colors.gray100, colors.white)}>
          <Text
            style={fieldTextStyles(
              watch('gender') ? colors.black : colors.gray200,
            )}>
            {watch('gender')
              ? watch('gender') === 'female'
                ? '여'
                : '남'
              : '성별'}
          </Text>
        </TouchableOpacity>
        {isSubmitted && errors.gender && (
          <InvalidText>{errors.gender.message}</InvalidText>
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
              placeholderTextColor={colors.gray200}
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
        text="회원가입"
        style={styles.submitButton}
      />

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
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  frame: {
    paddingTop: 40,
  },
  wrapper: {
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
  justifyContent: 'center',
});

const pickerStyles = (
  borderColor: string,
  backgroundColor: string,
): ViewStyle => ({
  borderWidth: 1,
  borderColor,
  backgroundColor,
  height: 46,
  paddingHorizontal: 10,
  marginTop: 10,
  justifyContent: 'center',
});

const fieldTextStyles = (color: string): TextStyle => ({
  color,
});

export default RegisterPresenter;
