import React from 'react';
import { StyleSheet } from 'react-native';
import StackFlashMessage from 'react-native-stack-flash-message';
import Text from '~/components/texts/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FlashMessage: React.FC = () => {
  return (
    <StackFlashMessage
      ref={ref => StackFlashMessage.setRef(ref)}
      titleProps={{ isBold: true, style: styles.title }}
      contentsProps={{ style: styles.contents }}
      contentsComponent={Text}
      icons={{
        success: (
          <Ionicons name="checkmark-circle-outline" size={20} color="blue" />
        ),
        info: (
          <Ionicons name="information-circle-outline" size={20} color="green" />
        ),
        error: <Ionicons name="close-circle-outline" size={20} color="red" />,
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    lineHeight: 12,
  },
  contents: {
    lineHeight: 12,
  },
});

export default FlashMessage;
