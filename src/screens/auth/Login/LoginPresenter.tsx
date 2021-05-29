import React from 'react';
import {
  Platform,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '~/components/texts/Text';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import AuthFrame from '~/components/auth/AuthFrame';
import { ThemeContext } from '~/contexts/ThemeContext';
import { ThemeContextState } from '~/types/themes';

type P = {
  kakaoLogin: () => void;
  naverLogin: () => void;
  googleLogin: () => void;
  facebookLogin: () => void;
  appleLogin: () => void;
  emailLogin: () => void;
};

const LoginPresenter: React.FC<P> = (props: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);
  const kakaoStyle = kakaoStyles(colors.black, colors.kakao);
  const naverStyle = naverStyles(colors.white, colors.naver);
  const googleStyle = googleStyles(colors.white, colors.google);
  const facebookStyle = facebookStyles(colors.white, colors.facebook);
  const appleStyle = appleStyles(colors.white, colors.apple, colors.foreground);

  return (
    <AuthFrame title="간편하게 로그인하고" style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={props.kakaoLogin} style={kakaoStyle.button}>
          <FontAwesomeIcon name="comment" style={kakaoStyle.buttonIcon} />
          <Text isBold={true} style={kakaoStyle.buttonText}>
            카카오톡으로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.naverLogin} style={naverStyle.button}>
          <FastImage
            source={require('~/assets/icons/naver.png')}
            style={styles.naverIcon}
          />
          <Text isBold={true} style={naverStyle.buttonText}>
            네이버로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.googleLogin}
          style={googleStyle.button}>
          <IonIcon name="logo-google" style={googleStyle.buttonIcon} />
          <Text isBold={true} style={googleStyle.buttonText}>
            구글로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.facebookLogin}
          style={facebookStyle.button}>
          <FontAwesome5Icon name="facebook" style={facebookStyle.buttonIcon} />
          <Text isBold={true} style={facebookStyle.buttonText}>
            페이스북으로 시작
          </Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity
            onPress={props.appleLogin}
            style={appleStyle.button}>
            <IonIcon name="logo-apple" style={appleStyle.buttonIcon} />
            <Text isBold={true} style={appleStyle.buttonText}>
              애플로 시작
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={props.emailLogin}
        style={styles.emailLoginButton}>
        <Text style={emailLoginTextStyles(colors.gray200)}>
          이메일로 로그인하기
        </Text>
      </TouchableOpacity>
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    marginVertical: -5,
  },
  button: {
    marginVertical: 5,
    borderRadius: 25,
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    marginRight: 5,
    fontSize: 16,
  },
  naverIcon: {
    width: 16,
    height: 15,
    marginRight: 5,
  },
  emailLoginButton: {
    marginTop: 'auto',
  },
});

const emailLoginTextStyles = (color: string): TextStyle => ({
  color,
  textDecorationLine: 'underline',
});

const kakaoStyles = (color: string, backgroundColor: string) =>
  StyleSheet.create({
    button: StyleSheet.flatten([styles.button, { backgroundColor }]),
    buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color }]),
    buttonText: { color },
  });

const naverStyles = (color: string, backgroundColor: string) =>
  StyleSheet.create({
    button: StyleSheet.flatten([styles.button, { backgroundColor }]),
    buttonText: { color },
  });

const googleStyles = (color: string, backgroundColor: string) =>
  StyleSheet.create({
    button: StyleSheet.flatten([styles.button, { backgroundColor }]),
    buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color }]),
    buttonText: { color },
  });

const facebookStyles = (color: string, backgroundColor: string) =>
  StyleSheet.create({
    button: StyleSheet.flatten([styles.button, { backgroundColor }]),
    buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color }]),
    buttonText: { color },
  });

const appleStyles = (
  color: string,
  backgroundColor: string,
  borderColor: string,
) =>
  StyleSheet.create({
    button: StyleSheet.flatten([
      styles.button,
      { backgroundColor, borderColor },
    ]),
    buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color }]),
    buttonText: { color },
  });

export default LoginPresenter;
