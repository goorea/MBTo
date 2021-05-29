import React from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '~/components/texts/Text';

type P = {
  title: string;
  children: React.ReactNode;
  style?: ViewStyle;
  wrapperStyle?: ViewStyle;
};

const AuthFrame: React.FC<P> = ({
  title,
  children,
  style,
  wrapperStyle,
}: P) => {
  const [scrollViewHeight, setScrollViewHeight] = React.useState<number>(0);
  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setScrollViewHeight(nativeEvent.layout.height);
  };

  return (
    <ScrollView onLayout={onLayout}>
      <View style={[wrapperStyles(scrollViewHeight), wrapperStyle]}>
        <FastImage
          source={require('~/assets/logos/default.png')}
          style={styles.logo}
        />
        <Text size={24} style={styles.description}>
          {title}
        </Text>
        <Text size={24} isBold={true} style={styles.description}>
          나를 알아봐요
        </Text>

        <View style={[styles.childrenWrapper, style]}>{children}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 84,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
  },
  childrenWrapper: {
    paddingTop: 20,
    width: '100%',
    flex: 1,
  },
});

const wrapperStyles = (minHeight: number): ViewStyle => ({
  minHeight,
  alignItems: 'center',
  paddingTop: 100,
  paddingBottom: 40,
  paddingHorizontal: 40,
});

export default AuthFrame;
