import React from 'react';
import RegisterPresenter from '~/screens/auth/Register/RegisterPresenter';
import { RegisterOptions, useForm } from 'react-hook-form';
import { MBTI } from '~/types/instances';

type P = {};

export type RegisterFormData = {
  name: string;
  nickname: string;
  email: string;
  mbti: '' | MBTI;
  gender: '' | 'male' | 'female';
  tel: string;
};

const RegisterContainer: React.FC<P> = () => {
  const form = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      mbti: '',
      gender: '',
      tel: '',
    },
  });
  const nameRules: RegisterOptions = { required: '이름을 입력해주세요' };
  const nicknameRules: RegisterOptions = { required: '닉네임을 입력해주세요' };
  const emailRules: RegisterOptions = {
    required: '이메일을 입력해주세요',
    validate: value =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
        value,
      ) || '이메일 형식이 올바르지 않습니다',
  };
  const mbtiRules: RegisterOptions = { required: 'MBTI를 선택해주세요' };
  const genderRules: RegisterOptions = { required: '성별을 선택해주세요' };
  const telRules: RegisterOptions = {
    required: '휴대폰 번호를 입력해주세요',
    minLength: {
      value: 10,
      message: '휴대폰 번호를 입력해주세요',
    },
  };
  const onSubmit = (data: RegisterFormData) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(data), 1000);
    });
  };
  const mbti: MBTI[] = [
    'ESTJ',
    'ESTP',
    'ESFJ',
    'ESFP',
    'ENTJ',
    'ENTP',
    'ENFJ',
    'ENFP',
    'ISTJ',
    'ISTP',
    'ISFJ',
    'ISFP',
    'INTJ',
    'INTP',
    'INFJ',
    'INFP',
  ];

  return (
    <RegisterPresenter
      {...form}
      nameRules={nameRules}
      nicknameRules={nicknameRules}
      emailRules={emailRules}
      mbti={mbti}
      mbtiRules={mbtiRules}
      genderRules={genderRules}
      telRules={telRules}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterContainer;
