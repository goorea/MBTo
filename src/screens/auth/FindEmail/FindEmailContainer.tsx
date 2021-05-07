import React from 'react';
import FindEmailPresenter from './FindEmailPresenter';
import { RegisterOptions, useForm } from 'react-hook-form';

type P = {};

export type FindEmailFormData = {
  name: string;
  tel: string;
};

const FindEmailContainer: React.FC<P> = () => {
  const form = useForm<FindEmailFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      tel: '',
    },
  });
  const nameRules: RegisterOptions = {
    required: '이름을 입력해주세요',
  };
  const telRules: RegisterOptions = {
    required: '휴대폰 번호를 입력해주세요',
    minLength: {
      value: 10,
      message: '휴대폰 번호를 입력해주세요',
    },
  };
  const onSubmit = (data: FindEmailFormData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };
  return (
    <FindEmailPresenter
      {...form}
      nameRules={nameRules}
      telRules={telRules}
      onSubmit={onSubmit}
    />
  );
};

export default FindEmailContainer;
