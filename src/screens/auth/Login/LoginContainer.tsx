import React from 'react';
import LoginPresenter from './LoginPresenter';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { AuthParamList } from '~/types/navigations';
import { RouteProp } from '@react-navigation/native';

type P = {
  navigation: NativeStackNavigationProp<AuthParamList>;
  route: RouteProp<AuthParamList, 'Login'>;
};

const LoginContainer: React.FC<P> = ({ navigation }: P) => {
  const kakaoLogin = () => {};
  const naverLogin = () => {};
  const googleLogin = () => {};
  const facebookLogin = () => {};
  const appleLogin = () => {};
  const emailLogin = () => navigation.navigate('EmailLogin');

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
