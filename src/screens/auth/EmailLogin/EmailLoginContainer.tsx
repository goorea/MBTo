import React from 'react';
import EmailLoginPresenter from './EmailLoginPresenter';
import { RegisterOptions, useForm } from 'react-hook-form';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { AuthParamList } from '~/types/navigations';
import { RouteProp } from '@react-navigation/native';

type P = {
  navigation: NativeStackNavigationProp<AuthParamList>;
  route: RouteProp<AuthParamList, 'EmailLogin'>;
};

export type EmailLoginFormData = {
  email: string;
  password: string;
};

const EmailLoginContainer: React.FC<P> = ({ navigation }: P) => {
  const form = useForm<EmailLoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const emailRules: RegisterOptions = {
    required: '이메일을 입력해주세요',
    validate: value =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
        value,
      ) || '이메일 형식이 올바르지 않습니다',
  };
  const passwordRules: RegisterOptions = {
    required: '비밀번호를 입력해주세요',
    minLength: {
      value: 3,
      message: '비밀번호를 입력해주세요',
    },
  };
  const onSubmit = (data: EmailLoginFormData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };
  const toFindEmail = () => navigation.navigate('FindEmail');
  const toFindPassword = () => navigation.navigate('FindPassword');
  const toRegister = () => navigation.navigate('Register');

  return (
    <EmailLoginPresenter
      {...form}
      emailRules={emailRules}
      passwordRules={passwordRules}
      onSubmit={onSubmit}
      toFindEmail={toFindEmail}
      toFindPassword={toFindPassword}
      toRegister={toRegister}
    />
  );
};

export default EmailLoginContainer;
