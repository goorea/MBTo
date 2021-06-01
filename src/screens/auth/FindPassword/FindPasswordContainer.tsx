import React from 'react';
import { RegisterOptions, useForm } from 'react-hook-form';
import FindPasswordPresenter from './FindPasswordPresenter';

type P = {};

export type FindPasswordFormData = {
  email: string;
};

const FindPasswordContainer: React.FC<P> = () => {
  const form = useForm<FindPasswordFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });
  const emailRules: RegisterOptions = {
    required: '이메일을 입력해주세요',
    validate: value =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
        value,
      ) || '이메일 형식이 올바르지 않습니다',
  };
  const onSubmit = (data: FindPasswordFormData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };

  return (
    <FindPasswordPresenter
      {...form}
      emailRules={emailRules}
      onSubmit={onSubmit}
    />
  );
};

export default FindPasswordContainer;
