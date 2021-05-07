import React from 'react';
import EmailLoginPresenter from './EmailLoginPresenter';
import { RegisterOptions, useForm } from 'react-hook-form';

type P = {};

export type EmailLoginFormData = {
  email: string;
  password: string;
};

const EmailLoginContainer: React.FC<P> = () => {
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
  const toFindEmail = () => {};
  const toFindPassword = () => {};
  const toRegister = () => {};

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
