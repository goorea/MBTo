import React from 'react';
import LoginPresenter from './LoginPresenter';
import {
  KakaoProfile,
  login,
  getProfile,
  unlink,
} from '@react-native-seoul/kakao-login';

type P = {};

const LoginContainer: React.FC<P> = () => {
  const kakaoLogin = async () => {
    await login();
    const profile: KakaoProfile = await getProfile();

    console.log(profile);

    if (!profile.email) {
      // TODO: 이메일이 없으면 플래시 메시지와 함께 연결 끊기
      await unlink();
    }
  };
  const naverLogin = () => {};
  const googleLogin = () => {};
  const facebookLogin = () => {};
  const appleLogin = () => {};
  const emailLogin = () => {};

  return (
    <LoginPresenter
      kakaoLogin={kakaoLogin}
      naverLogin={naverLogin}
      googleLogin={googleLogin}
      facebookLogin={facebookLogin}
      appleLogin={appleLogin}
      emailLogin={emailLogin}
    />
  );
};

export default LoginContainer;
