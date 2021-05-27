import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '~/components/Text';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';

type P = {
  kakaoLogin: () => void;
  naverLogin: () => void;
  googleLogin: () => void;
  facebookLogin: () => void;
  appleLogin: () => void;
  emailLogin: () => void;
};

const LoginPresenter: React.FC<P> = (props: P) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text size={46} isBold={true} style={styles.title}>
          MBTo
        </Text>
        <Text size={24} style={styles.description}>
          간편하게 로그인하고
        </Text>
        <Text size={24} isBold={true} style={styles.description}>
          나를 알아봐요
        </Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={props.kakaoLogin}
            style={kakaoStyles.button}>
            <FontAwesomeIcon name="comment" style={kakaoStyles.buttonIcon} />
            <Text isBold={true} style={kakaoStyles.buttonText}>
              카카오톡으로 시작
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.naverLogin}
            style={naverStyles.button}>
            <FastImage
              source={require('~/assets/icons/naver.png')}
              style={styles.naverIcon}
            />
            <Text isBold={true} style={naverStyles.buttonText}>
              네이버로 시작
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.googleLogin}
            style={googleStyles.button}>
            <IonIcon name="logo-google" style={googleStyles.buttonIcon} />
            <Text isBold={true} style={googleStyles.buttonText}>
              구글로 시작
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.facebookLogin}
            style={facebookStyles.button}>
            <FontAwesome5Icon
              name="facebook"
              style={facebookStyles.buttonIcon}
            />
            <Text isBold={true} style={facebookStyles.buttonText}>
              페이스북으로 시작
            </Text>
          </TouchableOpacity>

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              onPress={props.appleLogin}
              style={appleStyles.button}>
              <IonIcon name="logo-apple" style={appleStyles.buttonIcon} />
              <Text isBold={true} style={appleStyles.buttonText}>
                애플로 시작
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          onPress={props.emailLogin}
          style={styles.registerButton}>
          <Text style={styles.registerText}>이메일로 로그인하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 40,
  },
  title: {
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
  },
  buttonWrapper: {
    paddingTop: 20,
    marginVertical: -5,
    width: '100%',
  },
  button: {
    marginVertical: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
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
  registerButton: {
    marginTop: 'auto',
  },
  registerText: {
    color: '#898989',
    textDecorationLine: 'underline',
  },
});

const kakaoStyles = StyleSheet.create({
  button: StyleSheet.flatten([styles.button, { backgroundColor: '#fee500' }]),
  buttonIcon: StyleSheet.flatten([
    styles.buttonIcon,
    { color: 'rgba(0, 0, 0, 0.85)' },
  ]),
  buttonText: { color: 'rgba(0, 0, 0, 0.85)' },
});

const naverStyles = StyleSheet.create({
  button: StyleSheet.flatten([styles.button, { backgroundColor: '#1ec800' }]),
  buttonText: { color: '#fff' },
});

const googleStyles = StyleSheet.create({
  button: StyleSheet.flatten([styles.button, { backgroundColor: '#dd4b39' }]),
  buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color: '#fff' }]),
  buttonText: { color: '#fff' },
});

const facebookStyles = StyleSheet.create({
  button: StyleSheet.flatten([styles.button, { backgroundColor: '#3b5999' }]),
  buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color: '#fff' }]),
  buttonText: { color: '#fff' },
});

const appleStyles = StyleSheet.create({
  button: StyleSheet.flatten([styles.button, { backgroundColor: '#000' }]),
  buttonIcon: StyleSheet.flatten([styles.buttonIcon, { color: '#fff' }]),
  buttonText: { color: '#fff' },
});

export default LoginPresenter;