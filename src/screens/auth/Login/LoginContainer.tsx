import React from 'react';
import LoginPresenter from './LoginPresenter';

type P = {};

const LoginContainer: React.FC<P> = () => {
  const kakaoLogin = () => {};
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
